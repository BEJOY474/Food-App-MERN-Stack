const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
  
    name :{
        type : String,
        require : true
    },

    email : {
        type : String,
        unique : true,
        require : true
    },

    password :{
        type : String,
        require : true,
        set: (v) => bcrypt.hashSync(v, salt)
    },

    isAdmin: {
        type : Boolean,
        default: false
    },

    isBanned: {
        type : Boolean,
        default: false
    },

    createdOn :{
        type : Date,
        default : Date.now
    }
}, {timestamps : true});

exports.User = mongoose.model("User", userSchema );

