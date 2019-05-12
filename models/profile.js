const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    bio:{
        type: String,
        required: true
    },
    title1:{
        type: String,
        required: true
    },
    title2:{
        type: String,
    },
    title3:{
        type: String,
    },
    desc1:{
        type: String,
        required: true
    },
    desc2:{
        type: String,
    },
    desc3:{
        type: String,
    },
    prog1:{
        type: String,
    },
    prog2:{
        type: String,
    },
    prog3:{
        type: String,
    },
    img:{
        type: String,
        // required: true
    }
});

var Profile = module.exports = mongoose.model('Profile', profileSchema);

