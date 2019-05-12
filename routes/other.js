const express = require('express');

const routes = express.Router();

//bring in models
const Profile = require('../models/profile');

//Project Routes
routes.get('/project', (req, res)=> {
    res.render('project');
});

//Contact Routes
routes.get('/contact', (req, res)=> {
    res.render('contact');
});

//About Routes
routes.get('/about', (req, res)=> {
    res.render('about');
});

//About Page Routes
routes.get('/aboutPage', (req, res)=> {
    res.render('aboutPage');
});

//Edit About Page Routes
routes.get('/editAboutPage', (req, res)=> {
    res.render('editProfile');
});

//Post
routes.post('/editAboutPage', (req, res)=> {
    var prof = new Profile();

    prof.bio = req.body.bio;
    prof.title1 = req.body.title1;
    prof.desc1 = req.body.desc1;
    prof.prog1 = req.body.prog1;
    prof.title2 = req.body.title2;
    prof.desc2 = req.body.desc2;
    prof.prog2 = req.body.prog2;
    prof.title3 = req.body.title3;
    prof.desc3 = req.body.desc3;
    prof.prog3 = req.body.prog3;

    prof.save( function (err) {
        if (err) {
            console.log(err);
        }else{
            res.redirect('/');
        }
    });
});

module.exports = routes;