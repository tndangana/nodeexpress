const symptomService = require('./symptom.service');


exports.create = (req, res, next) => {
    symptomService.create(req.body)
        .then(sym => res.status(200).json(sym))
        .catch(err => {
            next(err)
        });
}
exports.findOne = (req, res, next) => {
    symptomService.findOne(req.params.id)
        .then(sym => sym ? res.status(200).json(sym) : res.status(404).json({ message: "Symptom not found !!" }))
        .catch(err => { next(err) })

}

exports.findAll = (req, res, next) => {
    symptomService.findAll()
    .then(list => res.status(200).json(list))
    .catch(err => { next(err) })
}
exports.delete = (req, res, next) => {
    symptomService.delete(req.params.id)
    .then(sym => res.status(204).json({ sym }))
    .catch(err => { next(err) })
}

exports.update = (req, res, next) => {
    symptomService.update(req.params.id, req.body)
        .then(sym => sys ? res.status(200).json({ sym }) : res.status(404).json({ message: "Cannot update,user does not exist" }))
        .catch(err => { next(err) })
}