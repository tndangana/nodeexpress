const mongoose = require('mongoose');


const PatientSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Rather Not Say']
    },
    dateOfBirth:{
      type:Date,
      default: Date.now
    }   
});

const Patient = mongoose.model('patient', PatientSchema);

module.exports = { Patient: Patient }
























