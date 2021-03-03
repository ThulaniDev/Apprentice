//importing the mongoose module
const mongoose = require('mongoose')
//creating database schema
const userSchema = mongoose.Schema
let userData = new userSchema({
    
    firstname:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    },
    username:{
        type: String, 
        required:true
    },
    email:{
        type: String,
        require: true
    },
    phoneNumber:{
        type: Number,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now
    }
    
    

})
let user = mongoose.model('admins', userData)   
module.exports = user

