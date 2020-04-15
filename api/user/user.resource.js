
const userService = require('./user.service');
const tokenService = require('../token/token.service')
const User = require('./user.model').User;
const bcrypt = require('bcrypt')


exports.create = (req, res, next) => {
    userService.create(req.body)
        .then(user => user ? res.status(201).json(user) : res.status(409).json({ message: "User already exists" }))
        .catch(err => next(err));
}



exports.authenticateLogin = async (req, res, next) => {
    try {

        let userExist = await User.findOne({ email: req.body.email });

        if (!userExist) return res.status(404).json({ message: `User ${req.body.email} is not associated with this account` });

        else if (userExist && !userExist.verified) {

            res.status(403).json({ message: `User with email ${req.body.email} has not been verified yet.An email with your verification code has been sent.Please verify` })
            return await tokenService.resendToken(userExist.email);
        }

        if (bcrypt.compareSync(req.body.password, userExist.password)) {

            let body = {
                userId: userExist._id,
                email: userExist.email,
                mobile: userExist.mobile
            }
            let token = userExist.generateToken(body);
            return res.status(200).json({ token: token })
        } else {
            return res.status(401).json({ message: "Password given not correct" });
        }
    }
    catch (e) {
        next(e)
    }
}

exports.findOne = (req, res, next) => {
    userService.findOne(req.params.id)
        .then(user => res.status(200).json(user))
        .catch(err => next(err))
}

exports.findAll = (req, res, next) => {
    userService.findAll()
        .then(userList => res.status(200).json(userList))
        .catch(err => next(err))
}

exports.update = (req, res, next) => {
    userService.update(req.params.id, req.body)
        .then(user =>user? res.status(200).json(user):res.status(404).json({message:"User does not exists"}))
        .catch(err => next(err))
}

exports.delete = (req, res, next) => {
    userService.delete(req.params.id)
        .then(user => res.status(200).json(user))
        .catch(err => next(err))
}