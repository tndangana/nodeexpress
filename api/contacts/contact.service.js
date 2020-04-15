const Contact = require('./contacts.model').Contact;
const countryService = require('../country/country.service');
const patientService = require('../services/patient.service');

async function create(param) {
    try {
        let country = await patientService.getOne(param.patientId);
        let patient = await countryService.findOne(param.countryId);
        if (await Contact.findOne({ name: param.name })) return;
        if (!country) return;
        if (!patient) return;
       
        let contact = new Contact(param);
        contact.patientId = patient._id;
        contact.countryId = country._id;
        await contact.save();
        return Contact.findById(contact._id)
    } catch (error) {

    }
}

async function findAll() {
    try {
        return await Contact.find({})
    } catch (error) {

    }
}
async function findOne(_id) {
    try {
        if (!await Contact.findById(_id)) return;
        return Contact.findById(_id);
    } catch (error) {

    }
}
async function update(_id, param) {
    try {
        let contact = await Contact.findById(_id)
        if (!contact) return;
        Object.assign(contact, param);
        await contact.save();
        return contact.findById(contact._id)

    } catch (error) {

    }
}
async function _delete(_id) {
    try {
        return await Contact.deleteOne({ _id: _id })
    } catch (error) {

    }
}



module.exports = { _delete: _delete, create: create, findAll: findAll, update: update, findOne: findOne }