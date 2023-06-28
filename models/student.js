const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    std_id: {
        type: String,
        required: true
    },
    batch: {
        type: String,
        required: true
    },
    std_college: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    dsa_score:{
        type: String,
        required: true
    },
    front_end_score:{
        type: String,
        required: true
    },
    back_end_score:{
        type: String,
        required: true
    },
    react_score:{
        type: String,
        required: true
    },
    result:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employ"
    },
    //include all the interviews available
    interviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Interview'
        }
    ]
},{
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;