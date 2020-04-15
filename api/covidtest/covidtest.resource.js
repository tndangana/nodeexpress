const covidTestService = require('./covid.service');


exports.create = (req, res, next) => {
    covidTestService.create(req.body)
        .then(covidTest => covidTest ? res.status(201).json(covidTest) : res.status(409).json({ message: 'Covid already Exists' }))
        .catch(err => next(err));
}

exports.findAll = (req, res, next) => {
    covidTestService.getAll()
        .then(covidTestList => {
            res.status(200).json(covidTestList)
        })
        .catch(err => next(err))
}

exports.findOne = (req, res, next) => {
    covidTestService.getOne(req.params.id)
        .then(covidTest => res.status(200).json(covidTest))
        .catch(err => next(err))
}

exports.update = (req, res, next) => {
    covidTestService.update(req.params.id, req.body)
        .then(covidTest => res.status.json(covidTest))
        .catch(err => next(err))
}

exports.delete = (req, res, next) => {
    covidTestService.delete(req.params.id).
        then(covidTest => res.status(200).json(covidTest))
        .catch(err => next(err))
}

