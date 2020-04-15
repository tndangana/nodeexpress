const mongoose = require('mongoose');

const CovidTestSchema = new mongoose.Schema({

    patientId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'patient'
    },
    symptomList: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'symptom' }
    ]


});

const CovidTest = mongoose.model('covidtest', CovidTestSchema);

module.exports = { CovidTest: CovidTest };