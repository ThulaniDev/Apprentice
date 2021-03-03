//creating a users schema
const mongo = require('mongoose')
const bcrypt = require('bcryptjs')
let schema = mongo.Schema
let userSchema = new schema({
    empnum:{
        type : String,
        required: true,
        
    },
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    username:{
        type: String, 
        required:true
    },
    email:{
        type: String,
        required: true
    },
    phonenumber:{
        type: Number,
        required: true
    },
    idnumber:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    status:{
        type: String,
        default: 'Not Attempted'            
    },
    results:{
        type: Number,
        default:0    
    },
    viewscript:[Object],
    date:{
        type: Date,
        default: Date.now
    }
    
    
})
userSchema.pre('save', async function(req, res, next){
    try{
        console.log('password hashing')
        this.password = req.body.password
        bcrypt.genSalt(10, (error, salt)=>{
            bcrypt.hash(this.password, salt, (error, hash)=>{
                if(error) throw error
                this.password = hash;
                
                this.password.save((error)=>{
                    if(error){
                        console.log(error.message)
            
                    }
                    console.log('failed to hash the password')
                })
            })
            
        })
    }
    catch(err){
        console.log(err.message)
    }
    
})
let users = mongo.model('Users', userSchema)

module.exports = users
