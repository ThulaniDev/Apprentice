const jwt = require('jsonwebtoken')
const adminModel = require('../models/adminModel')
const UserTable = require('../models/usersModel')

module.exports.adminRouterProtected = async (req, res, next)=>{
    //check if the token exist
    let users = await UserTable.find()
    try {
        
        
        const token = req.headers.cookie 
        const adminTokenValue = token.split('=')
        if(adminTokenValue[0] === 'admin'){
        //if the token exits verify it
        jwt.verify(adminTokenValue[1], process.env.JWT_SECRET ,  async  (err, decodedToken)=>{
            if(err){
                console.log(err.message)
                console.log('Please login')
                res.redirect('/')
            }
            else{
                
                
                let Admin  = await adminModel.findById(decodedToken.id)
                .then(admin =>{
                    req.authAdmin = admin
                   
                    next()
                })
                .catch((err)=>{
                    console.log(err.message)
                })
                

            } 
        })

    }else{
        console.log('Please login')
        res.redirect('/')
    }        
         
    } catch (error) {
        console.log(error.message)
        res.redirect('/')
    }
    
    
    
}
module.exports.userRouterProtected = async (req, res, next)=>{
    try {
        
        
        const token = req.headers.cookie 
        const userTokenValue = token.split('=')
        if(userTokenValue[0] === 'user'){
        //if the token exits verify it
        jwt.verify(userTokenValue[1], process.env.JWT_SECRET ,  async  (err, decodedToken)=>{
            if(err){
                console.log(err.message)
                console.log('Please login')
                res.redirect('/')
            }
            else{
                
                
                let user  = await UserTable.findById(decodedToken.id)
                .then(user =>{
                    req.authUser = user
                   
                    next()
                })
                .catch((err)=>{
                    console.log(err.message)
                })
                

            } 
        })

    }else{
        console.log('Please login')
        res.redirect('/')
    }        
         
    } catch (error) {
        console.log(error.message)
        res.redirect('/')
    }
    
    

}
