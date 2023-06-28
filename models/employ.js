const mongoose = require('mongoose');

const employSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Employ = mongoose.model('Employ', employSchema);

module.exports = Employ;