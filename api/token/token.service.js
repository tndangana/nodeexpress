const Token = require('../token/token.model').Token;
const verify = require('../services/mail.service');
const User = require('../user/user.model').User;



async function generateVerificationCode(user) {
    console.log(`I have been here`)
    let verificationToken = Math.random().toString(36).substring(2, 7).toUpperCase();
    let token = new Token();
    token.userId = user._id;
    token.email = user.email;
    token.token = verificationToken;
    await token.save();
    await verify.verifyEmail(token);
}

async function resendToken(email) {
  
    let userToken = await Token.findOne({ email: email })
    if (userToken && userToken.token) {
        console.log(`1234444444444${email}4444444456778`)
        return await verify.verifyEmail(userToken);
    } else if (!userToken) {
        let userExists = await User.findOne({ email: email })
        if (userExists) {
            console.log(`123456778`)
            let verificationToken = Math.random().toString(36).substring(2, 7).toUpperCase();
            let token = new Token();
            token.userId = userExists._id;
            token.email = userExists.email;
            token.token = verificationToken;
            await token.save();
            await verify.verifyEmail(token);
        }
    }

}

async function verifyToken(tokenParam) {
    console.log(`${tokenParam}&&&&&&&&&&&&&`)
    try {
        let token = await Token.findOne({ token: tokenParam })

        if (!token) return;
        let user = await User.findById(token.userId);
        console.log(`yyyyy${user}`)
        user.verified = true;
        await user.save();
        return user.verified;
    }
    catch (e) {
        throw new Error(`Error is ${e}`)
    }




}

module.exports = { verifyToken: verifyToken, generateVerificationCode: generateVerificationCode,resendToken:resendToken }
