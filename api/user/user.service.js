const User = require('./user.model').User;
const token = require('../token/token.service');





async function create(userParam) {

    try {
        if (await User.findOne({ email: userParam.email })) return;

        let user = new User(userParam);
        await user.save();
        await token.generateVerificationCode(user);

        return User.findById(user._id)
    } catch (e) {
         throw new Error(e)
    }

}

async function findAll() {
    try {
        return await User.find({});
    }
    catch (e) {

    }
}

async function findOne(_id) {
    try {

        return await User.findById(_id)
    } catch (e) {

    }
}

async function _delete(id) {

    return User.deleteOne({ _id: id })
}

async function update(_id, userParam) {

    try {
        let user = await User.findById(_id);
        if (!user) return;
        Object.assign(user, userParam);
        await user.save()
        return User.findById(user._id)
    }
    catch (e) {

    }
}




module.exports = { update: update, delete: _delete, findAll: findAll, findOne: findOne, create: create } 