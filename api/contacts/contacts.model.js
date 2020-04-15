const mongoose = require('mongoose');


const ContactSchema = new mongoose.Schema({

    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patient'
    },
    mobile: {
        countryCode: String,
        phoneNumber: String
    },
    address: {
        type: String,
        max: 100
    },
    countryId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'country'
    }
});

const Contact = mongoose.model('contact', ContactSchema);

module.exports = { Contact: Contact }