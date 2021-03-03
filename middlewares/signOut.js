    const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
//token method
const createToken = (id)=>{

    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: 1000,
        
    })
} 


module.exports.SignOut_Admin = (req, res, next)=>{
    let logOutAdmin = req.authAdmin
    let token = createToken(logOutAdmin.id)
    res.cookie('admin', token , {
        maxAge: 1000
        
    })
    res.redirect('/')

}

module.exports.SignOut_User = (req, res, next)=>{
    let logOutUser = req.authUser
    let token = createToken(logOutUser.id)
    res.cookie('user', token , {
        maxAge: 1000
        
    })
    res.redirect('/')

}


