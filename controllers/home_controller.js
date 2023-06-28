const Student = require('../models/student');

const home = async function(req,res){
    // const students = await Student.findOne({}).exec();

    const students = await Student.find({}).populate('user').exec();
    res.render('home',{
        title: 'Home | Page',
        students: students
    });
}

module.exports = {home};