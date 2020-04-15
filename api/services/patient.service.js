const Patient = require('../patient/patient.model').Patient;


async function create(patientParam) {
    try {
        if (await Patient.findOne({ firstName: patientParam.firstName, lastName: patientParam.lastName })) {
            return;
        }
        let patient = new Patient(patientParam);
        await patient.save();
        return Patient.findById(patient._id);
    }
    catch (e) {
        throw new Error(e)
    }


}

async function getAll() {
    return Patient.find({});
}

async function getOne(_id) {
    return Patient.findById(_id)
}

async function update(_id, patientParam) {
    try {
        let patient = await Patient.findById(_id);
        if (!patient) return;
        Object.assign(patient, patientParam);
        await patient.save()
        return Patient.findById(patient._id);
    } catch (e) {
        throw new Error(e)
    }
}

async function _delete(_id) {

    return Patient.deleteOne({ _id: _id })
}

module.exports = { create: create, getAll: getAll, delete: _delete, update, update, getOne: getOne }