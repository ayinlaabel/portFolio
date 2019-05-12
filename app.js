const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const flash = require('connect-flash');
const session = require('express-session');

//Init appjs
const app = express();

//set public folder as static folder
app.use(express.static(path.join(__dirname, 'public')));

//set defualt view engine
// app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//routes
app.get('/', (req, res) => {
    res.render('index');
});

//other routes
const other = require('./routes/other');
app.use('/portfolio', other);
//Set Port Server
const port = 3000;
app.listen(port, ()=> console.log(`Server Started on ${port}...`));