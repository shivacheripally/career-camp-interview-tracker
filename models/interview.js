const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
    Interview_CompanyName: {
        type: String,
        required: true
    },
    Interview_time: {
        type: String,
        required: true
    },
    Interview_date: {
        type: String,
        required: true
    },
    Interview_status: {
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employ'
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }
},{
    timestamps: true
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;