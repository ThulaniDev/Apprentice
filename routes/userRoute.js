const server = require('express')
const router = server.Router()
const express = server()
const auth = require('../controllers/auth')
const routerProtector = require('../middlewares/routesProtection')


//defining all routes
router.post('/member', auth.User_Login_Post)
router.get('/member', routerProtector.userRouterProtected, auth.User_Login_Get )


module.exports = router