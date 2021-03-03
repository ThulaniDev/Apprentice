//here we will initialize all the uploading configs with multer
const multer = require('multer')

//to get the multer running we will need storage and fiterFiles
//storage
const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, 'courses')
    },
    filename : (req, file, cb)=>{
        cb(null, file.originalname)
    }
})
//filefilter
const fileFilter = (req, file, cb) =>{
    if(file.mimetype  === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
        cb(null, true) 
    }
    else{
        cb(null, false) 
    } 
} 
//upload function
const upload = multer({
    storage,
    fileFilter 
})

module.exports = {
    upload 
}
