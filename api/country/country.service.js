const Country = require('./country.model').Country;


async function create(param) {
    try {

        let body = {
            status: 408,
            message: "I put 408 for my testing"
        }
        if (await Country.findOne({ name: param.name })) return ;
        let country = new Country(param);
        await country.save();
        return Country.findById(country._id)
    } catch (error) {
         throw new Error(` Error is ${error}`)
    }
}

async function findAll() {
    try {
        return await Country.find({})
    } catch (error) {

    }
}
async function findOne(_id) {
    try {
        if (!await Country.findById(_id)) return;
        return Country.findById(_id);
    } catch (error) {

    }
}
async function update(_id, param) {
    try {
        let country = await Country.findById(_id)
        if (!country) return;
        Object.assign(country, param);
        await country.save();
        return Country.findById(country._id)

    } catch (error) {

    }
}
async function _delete(_id) {
    try {
        return await Country.deleteOne({ _id: _id })
    } catch (error) {

    }
}

module.exports = { _delete: _delete, create: create, update: update, findAll: findAll, findOne: findOne }