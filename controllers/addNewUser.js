const User = require('../models/usersModel')

module.exports.addNewUser_Post = async function (req, res){
    try {
        let {empnum, firstname, lastname, username, email , phonenumber, idnumber, password} = req.body
        let newUser = await User.create({
            empnum, 
            firstname, 
            lastname, 
            username, 
            email , 
            phonenumber, 
            idnumber, 
            password
        }, (err, user)=>{
            if(err){
                console.log(`Failed to save the new user`)
                res.status(400).json({
                    msg: err.message
                })
            }
            else{
                user.save()
                console.log(`New user is saved ${user.id}`)
                res.status(201).json({
                    success:{
                        msg: "New user added",
                        user: user
                    }
                })
                res.redirect('/admin/member')
            }
        })
        
          
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
        console.log(error.message)
        
    }
    
}
