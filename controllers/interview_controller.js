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
    if (student) {
      const interview = await Interview.create({
        Interview_CompanyName: req.body.Interview_CompanyName,
        Interview_time: req.body.Interview_time,
        Interview_status: req.body.Interview_status,
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

const updateStudentInterviewStatus = async function(req, res){
  const id = req.query.id;
  
  await Interview.findByIdAndUpdate(id, {Interview_status: req.body.interview_status});
  console.log('Status Updated Successfully!');
  return res.redirect('back');
}

module.exports = {createInterview, updateStudentInterviewStatus};