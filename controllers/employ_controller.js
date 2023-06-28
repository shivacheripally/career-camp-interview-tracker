const Employ = require('../models/employ');

const employProfile = function(req,res){
    if(req.isAuthenticated()){
        return res.render('employProfile',{
            title: 'Employ | Profile'
        })
    }
    else{
        console.log("user not signed in can't access profile page Please Sign in");
        return res.redirect('/employees/sign-in');
    }
}

const sign_in = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/employees/profile');
    }
    return res.render('employ_sign_in',{
        title: 'Employ | SignIn'
    })
}

const sign_up = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/employees/profile');
    }

    return res.render('employ_sign_up',{
        title: 'Employ | SignUp'
    })
}

const createEmploy = async function(req,res){
    try{
        if(req.body.password !== req.body.confirm_password){
            console.log('Password miss-match!');
            return res.redirect('/employees/sign-up');
        }
        
        const user = await Employ.findOne({email: req.body.email}).exec();
    
        if(user){
            console.log('Employ already existed please login!');
            return res.redirect('/employees/sign-in');
        }
    
        if(!user){
            console.log('Employ created successfully please login!');

            await Employ.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            return res.redirect('/employees/sign-in');
        }
    }
    catch(err){
        console.log('Error occured while creating the user please try again!');
        return res.redirect('back');
    }
    
}

const createSession = function(req,res){
    console.log('On Home Page log-in successfull!');
    return res.redirect('/');
}

const destroySession = function(req,res){
    req.logout(function(err){
        if(err){
            console.log(`Error while signing-out: ${err}`);
            return res.redirect('back');
        }
        console.log('Successfully Logged-out from the session!');
        return res.redirect('/');
    });
}

module.exports = {employProfile,sign_in,sign_up,createSession,destroySession,createEmploy};