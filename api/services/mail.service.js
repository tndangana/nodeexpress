const nodemailer = require('nodemailer');





function verifyEmail(params) {

    return new Promise((resolve, reject) => {

        let transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAILPASSWORD
            }
        });
        const message = {
            from: process.env.EMAIL, // Sender address
            to: `${params.email}`,         // List of recipients
            subject: 'Token Verification', // Subject line
            html: `<h1> Your Token is  ${params.token}</h1>` // Plain text body
        };
        transport.sendMail(message, function (err, data) {
            !err ? resolve('Success sending mail') : reject('Something went wrong');
        });
    })






}

module.exports = { verifyEmail: verifyEmail }