const tokenservice = require('./token.service');


exports.verify = (req, res, next) => {
    tokenservice.verifyToken(req.body.token)
        .then(verified => verified ? res.status(200).json({ message: `verification is ${verified} ` }) : res.status(404).json({ message: `Token found is ${req.body.token} invalid` }))
        .catch(err => {
            next(err);
        });
}