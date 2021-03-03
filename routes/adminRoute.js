const express = require('express')
const router = express.Router()
const newUser = require('../controllers/addNewUser')
const auth = require('../controllers/auth')
const middlewares = require('../middlewares/routesProtection')
const userTable = require('../models/usersModel')
const cookieParser = require('cookie-parser')
const app = express()

//initializing middleware cookie parser
app.use(cookieParser())

//defining all routes
router.post('/member', auth.Admin_Login_Post)
router.post('/member/add-user', newUser.addNewUser_Post)
router.get('/member', middlewares.adminRouterProtected, async (req, res)=>{
    //rightfull admin
    let admin = req.authAdmin
    //getting users info
    let users = await userTable.find()
    res.render('homeAdmin', {admin, users})
})


router.get('/register', (req, res)=>{
    res.render('signingup')
}) 




module.exports = router 
