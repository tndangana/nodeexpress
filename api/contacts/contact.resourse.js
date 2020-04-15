const contactService = require('./contact.service');
const patientService = require('../services/patient.service');
const countryService = require('../country/country.service');

exports.create = async (req, res, next) => {
    try {
        let country = await patientService.getOne(req.body.patientId);
        let patient = await countryService.findOne(req.body.countryId);
        if (await Contact.findOne({ name: req.body.name }))
            return res.status(409).json({ message: `${req.body.name} already exists` });
        if (!country)
            return res.status(404).json({ message: `Country selected does not exist` });
        if (!patient) return res.status(404).json({ message: `Patient selected does not exist` });
        let contact = new Contact(req.body);
        contact.patientId = patient._id;
        contact.countryId = country._id;
        await contact.save();
        return Contact.findById(contact._id)
    } catch (error) {
        next(error)
    }
}
exports.findAll = (req, res, next) => {
    contactService.findAll()
        .then(contactList => res.status(200).json(contactList))
        .catch(err => next(err))
}
exports.findOne = (req, res, next) => {
    contactService.findOne(req.params.contactId)
        .then(contact => res.status(200).json(contact))
        .catch(err => next(err))
}
exports.update = (req, res, next) => {
    contactService.update(req.params.contactId, req.body)
        .then(contact => res.json(contact))
        .catch(err => next(err))
}
exports.delete = (req, res, next) => {
    contactService._delete(req.params.contactId)
        .then(contact => res.json(contact))
        .catch(err => next(err))
}