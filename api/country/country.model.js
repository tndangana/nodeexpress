const mongoose = require('mongoose');


const CountrySchema = new mongoose.Schema({
    name: String
});

const Country = mongoose.model('country',CountrySchema);

module.exports = {Country:Country}