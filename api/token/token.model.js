const mongoose = require('mongoose');

const TokenSchama = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    token: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    createdDate: {
        type: Date,
        required: true,
        default: Date.now,
        expires: '10m'
    }


}, { timestamps: true });

const Token = mongoose.model('token', TokenSchama);

module.exports = { Token: Token }