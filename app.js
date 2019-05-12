const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const flash = require('connect-flash');
const session = require('express-session');

//DB Connection
mongoose.connect('mongodb://localhost/profile');

const db = mongoose.connection;

//Check DB Connection
db.on('open', () => console.log('Connected to Mongodb on Port 27017 Successfully...'));

//Check DB Connection Error
db.once('error', () => console.log(err));

//Init appjs
const app = express();

//BodyParser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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