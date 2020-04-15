const Symptom = require('./symptoms.model').Symptoms;
const {handleError} = require('../../config/customError')



async function create(param) {

    try {

        if (await Symptom.findOne({ name: param.name })) return;
        let symptoms = new Symptom(param);
        await symptoms.save()
        return Symptom.findById(symptoms._id);

    } catch (e) {
          throw new Error(e)
    }
}

async function findOne(param) {
    try {
        if (!await Symptom.findById(param._id)) return;
        else
            return await Symptom.findById(param._id)

    } catch (error) {

    }

}
async function findAll() {
    try {
        return await Symptom.find({});
    } catch (error) {

    }

}
async function update(_id, param) {

    try {

        if (!await Symptom.findById(_id)) return;
        let symptom = await Symptom.findById(_id);
        Object.assign(symptom, param);
        symptom.save();
        return Symptom.findById(symptom._id)
    } catch (error) {

    }

}
async function _delete(_id) {
    try {
        return await Symptom.deleteOne({ _id: _id })
    } catch (error) {

    }
}

module.exports = { delete: _delete, update: update, findAll: findAll, findOne: findOne, create: create }