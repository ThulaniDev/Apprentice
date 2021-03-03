const express = require('express')
const app = express()
const bcrypt = require('bcryptjs')
const AdminTable  = require('../models/adminModel')
const UserTable = require('../models/usersModel')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const user = require('../models/adminModel')
const courseSource = require('../models/multiFielsUploadModel') 


//middleware for cookie parser
app.use(cookieParser())
//create jwt token for every user who logs in
//this token should be name after the users rights that can either be an admin or user
const expirerationDate = '2d'
const cookieExpirerationTime = 1000 * 60 * 60 * 24
//creating a token function
const createToken = (id)=>{

    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: expirerationDate,
        
    })
}
//creating a function that will protect routes and ensure that a user is authenticateed

//create error handler function
module.exports.errorHandler = (req , res, err, next)=>{
    
    if(err){
        console.log(err)
    }
    next()
}
const errors = []
module.exports.Admin_Login_Post = async (req, res)=>{
    //getting all the users in the user's db
    let users = await UserTable.find()
    
     
    try {
        let {username, password} = req.body
        let admin = await AdminTable.findOne({username})
        if(admin){
            bcrypt.compare(password , admin.password, (err , auth)=>{
                if(auth){
                    console.log('Authenticated Admin '+ admin._id)
                    res.locals.admin = admin
                    let token = createToken(admin._id)
                    res.cookie('admin', token , {
                        maxAge: cookieExpirerationTime
                        
                    })
                    
                    res.render('HomeAdmin' , {users})
                    
                }
                else{
                    errors.push({password:'Incorrect password'})
                    res.locals.errors = errors
                    
                    
                }
            } )
        }
        else{
            errors.push({username:'Incorrect username'})
            
            res.locals.errors = errors
            
        }
           
    } catch (error) {
        setTimeout(()=>{}, 3000)
        res.redirect('/')

        res.locals.errors = errors
        console.log('catch block is fired here')
        console.log(res.locals.errors)
        
    }
    
}
module.exports.User_Login_Post = async (req, res)=>{
    try {
        let course = await courseSource.find()
        let {username, password} = req.body
        let user = await UserTable.findOne({username})
        if(user){
            
            bcrypt.compare(password , user.password, (err , auth)=>{
                
                if(auth){
                    console.log('Authenticated User '+ user._id)
                    res.locals.user = user
                    res.locals.course = course
                    let token = createToken(user._id)
                    res.cookie('user', token, {
                        maxAge: cookieExpirerationTime
                    })
                    
                    res.render('HomeUser', {course})
                }
                else{
                    // res.redirect('/')
                    // console.log('Incorrect password')
                    
                    
                }
            } )
        }
        else{
            // res.redirect('/')
            // console.log('Incorrect username')
            
        }    
    } catch (error) {
        setTimeout(()=>{}, 3000)
        res.redirect('/')
        
    }
}
module.exports.User_Login_Get = async (req, res)=>{
    //get all the cousers
    let course = await courseSource.find()
    //getting the user object
    let user = req.authUser
    res.render('homeUser', {course, user})


    
} 

