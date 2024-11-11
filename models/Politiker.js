const mongoose = require('mongoose');

const politikerSchema = new mongoose.Schema({
    navn: {type: String},
    parti: String,
    stilling: String
});

module.exports = mongoose.model('Politiker', politikerSchema);