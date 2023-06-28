const Student = require('../models/student');

const enter_student_data = function (req, res) {
    if(!req.isAuthenticated()){
        console.log('Please Login!');
        return res.redirect('/employees/sign-in');
    }
    return res.render('enter_student_data', {
        title: 'Enter Student Data'
    });
}

const store_student_data = async function (req, res) {
    if(!req.isAuthenticated()){
        console.log('Please Login!');
        return res.redirect('/employees/sign-in');
    }
    console.log(req.body);
    try {
        await Student.create({
            name: req.body.name,
            std_id : req.body.std_id,
            batch: req.body.batch,
            std_college: req.body.std_college,
            status: req.body.status,
            dsa_score: req.body.dsa_score,
            front_end_score: req.body.front_end_score,
            back_end_score: req.body.back_end_score,
            react_score: req.body.react_score,
            interview_scheduled_time: req.body.interview_scheduled_time,
            interview_scheduled_date: req.body.interview_scheduled_date,
            result: req.body.result,
            user: req.user._id
        });

        return res.redirect('/');
    }
    catch (err) {
        console.log(`Error while storing the data: ${err}`);
        return res.redirect('back');
    }
}

module.exports = { enter_student_data, store_student_data };