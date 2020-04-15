const CovidTest = require('./covidtest.model').CovidTest;
const Patient = require('../patient/patient.model').Patient;
const Symptom = require('../symptoms/symptoms.model').Symptoms;



async function create(param) {

    try {
        let patient = await Patient.findById(param.patientId)
        if (!patient) return;
        const symptomList = [];
        for (let i = 0; i <= param.symptomList.length - 1; i++) {
            let symptoms = await Symptom.findById(param.symptomList[i]._id);
            if (symptoms) {
                symptomList.push(symptoms._id)
            }
        }
        let covidTest = new CovidTest();
        covidTest.patientId = patient._id;
        covidTest.symptomList = symptomList;
        await covidTest.save();
        return CovidTest.findById(covidTest._id);

    } catch (e) {

    }
}

async function findOne(param) {
    try {
        if (!await CovidTest.findById(param._id)) return;
        else
            return await CovidTest.findById(param._id)

    } catch (error) {

    }

}
async function findAll() {
    try {
        return await CovidTest.find({});
    } catch (error) {

    }

}
async function update(_id, param) {

    try {

        if (!await CovidTest.findById(_id)) return;
        let covidTest = await CovidTest.findById(_id);
        Object.assign(covidTest, param);
        covidTest.save();
        return CovidTest.findById(covidTest._id)
    } catch (error) {

    }

}
async function _delete(_id) {
    try {
        return await CovidTest.deleteOne({ _id: _id })
    } catch (error) {

    }
}

module.exports = { delete: _delete, update: update, findAll: findAll, findOne: findOne, create: create }