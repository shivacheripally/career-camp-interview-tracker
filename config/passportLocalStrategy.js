const Employ = require('../models/employ');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email'
},
    async function (email, password, done) {
        const user =  await Employ.findOne({ email: email }).exec();

        if (!user || user.password !== password) { return done(null, false); }
        return done(null, user);
    }
));

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user.id); 
   // where is this user.id going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser(async function(id, done) {
    try{
        const user = await Employ.findById(id).exec();
        done(null, user);
    }
    catch(err){
        console.log(err);
        done(err, null);
    }
});

passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/employees/sign-in');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;