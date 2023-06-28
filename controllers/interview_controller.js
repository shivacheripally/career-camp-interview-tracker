const Interview = require('../models/interview');
const Student = require('../models/student');

const createInterview = async function(req, res) {
  if (!req.isAuthenticated()) {
    console.log('Please Login!');
    return res.redirect('/employees/sign-in');
  }
  console.log(req.body);
  try {
    const student = await Student.findById(req.body.student).exec();
    console.log('student,student');
    if (student) {
      const interview = await Interview.create({
        Interview_CompanyName: req.body.Interview_CompanyName,
        Interview_time: req.body.Interview_time,
        Interview_date: req.body.Interview_date
      });

      student.interviews.push(interview);
      await student.save();

      return res.redirect('/');
    }
    else{
      console.log('Unable to find the student please try again!');
      return res.redirect('back');
    }
  } catch (err) {
    // Handle error appropriately
    console.error(err);
    return res.status(500).send('An error occurred');
  }
}

module.exports = {createInterview};