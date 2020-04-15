const patientService = require('../services/patient.service');


exports.create = (req, res, next) => {
    patientService.create(req.body)
        .then(patient => patient ? res.status(201).json(patient) : res.status(409).json({ message: 'Patient already Exists' }))
        .catch(err => next(err));
}

exports.findAll = (req, res, next) => {
    patientService.getAll()
        .then(patientList => {
            res.status(200).json(patientList)
        })
        .catch(err => next(err))
}

exports.findOne = (req, res, next) => {
    patientService.getOne(req.params.id)
        .then(patient => res.status(200).json(patient))
        .catch(err => next(err))
}

exports.update = (req, res, next) => {
    patientService.update(req.params.id, req.body)
        .then(patient => res.status.json(patient))
        .catch(err => next(err))
}

exports.delete = (req, res, next) => {
    patientService.delete(req.params.id).
        then(patient => res.status(200).json(patient))
        .catch(err => next(err))
}

