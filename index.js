const express = require('express');
const port = 8000;
const router = require('./routes/index');
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('passport');
const passsportLocal = require('./config/passportLocalStrategy');

const app = express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('assets'));

app.use(expressLayouts);

app.use(express.urlencoded({ extended: true }));

app.use(session({
    name:'Skill Test1',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/',router);

app.listen(port,function(err){
    if(err){
        console.log(`Error while server is up: ${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
});