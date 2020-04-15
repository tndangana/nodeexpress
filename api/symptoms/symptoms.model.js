const mongoose = require('mongoose');

const SymptomsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    }




},{
    timestamps:true
});

const Symptoms = mongoose.model('symptom',SymptomsSchema);

module.exports ={Symptoms:Symptoms}