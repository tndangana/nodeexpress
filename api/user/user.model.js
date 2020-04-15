const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");


const UserSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: [true, 'Email is required !!'],
        trim: true, unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    verified: {
        type: Boolean,
        default: false
    },
    mobileNumber: {
        type: String,
        required: [true, 'Mobile number required !!'],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required !!"],
        min: [6, 'Password is short'],
        max: 16
    }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
})
UserSchema.plugin(uniqueValidator);
//encrypt password before saving it in database
UserSchema.pre('save', async function (next) {

    const user = this;
    if (!user.isModified('password')) return next();

    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

UserSchema.methods.generateToken = (body) => {
    return jwt.sign(body, process.env.TOKEN_SECRET, { expiresIn: '1h' });
}

const User = mongoose.model('user', UserSchema);

module.exports = { User: User }