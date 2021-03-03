//initializing the express server
const server = require('express')
const express = server()
const session = require('express-session')
const flash = require('connect-flash')
const expressLayouts = require('express-ejs-layouts')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const signOut = require('./middlewares/signOut')
const protectingAdminRouter = require('./middlewares/routesProtection')
const errorHandler = require('./controllers/auth')
const cors = require('cors')


//middleware for cookie parser
express.use(cookieParser())

//middleware for cors
express.use(cors())

//initializing dotenv
dotenv.config()


//initializing mongoose
const mongo = require('mongoose')

mongo.connect('mongodb://localhost/Apprentice', { useNewUrlParser: true, useUnifiedTopology: true })
let db = mongo.connection
db.once('open', ()=>{
    console.log('App connected to the database...')
})
db.on('error', (error)=>{
    console.log(error)
})




//set up the post request handler/middleware
const bodyParser = require('body-parser')
express.use(bodyParser.urlencoded({extended:true}))
express.use(bodyParser.json()) 

//initializing the ejs view template 
express.use(expressLayouts)
express.set('view engine', 'ejs')


//error handler middleware
express.use(errorHandler.errorHandler)

express.use('/public', server.static('public'))
//welcome route
express.get('/' , (req, res)=>{
    //initial error values are 
    
    res.render('welcome')
})
//logout admin
express.get('/logout/admin', protectingAdminRouter.adminRouterProtected, signOut.SignOut_Admin)
//logout user
express.get('/logout/user', protectingAdminRouter.userRouterProtected, signOut.SignOut_User)


//home route


let adminRoute = require('./routes/adminRoute')
express.use('/admin', adminRoute)
//adding new admin

let userRoute = require('./routes/userRoute')
express.use('/user', userRoute)
//admin route

//api routes
let apiRouter = require('./routes/apiRoute')
express.use('/api', apiRouter)




express.listen(3000)
console.log('Server running at port 3000')

