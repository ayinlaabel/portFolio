const express = require('express');

const routes = express.Router();

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

module.exports = routes;