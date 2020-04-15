const countryService = require('./country.service');

exports.create = (req, res, next) => {
    countryService.create(req.body)
        .catch(country => country ? res.status(200) : res.status(409).json({ message: `${req.body.name} already exists` }))
        .catch(err => { next(err) })
}
exports.findAll = (req, res, next) => {
    countryService.findAll()
        .then(countryList => res.status(200).json(countryList))
        .catch(err => next(err))
}
exports.findOne = (req, res, next) => {
    countryService.findOne(req.params.contactId)
        .then(country => res.status(200).json(country))
        .catch(err => next(err))
}
exports.update = (req, res, next) => {
    countryService.update(req.params.countrytId, req.body)
        .then(country => res.json(country))
        .catch(err => next(err))
}
exports.delete = (req, res, next) => {
    countryService._delete(req.params.countryId)
        .then(country => res.json(country))
        .catch(err => next(err))
}