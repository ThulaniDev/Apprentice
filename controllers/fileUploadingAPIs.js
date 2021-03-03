const multipleFilesModel = require('../models/multiFielsUploadModel') 
//creating a multiple file upload handler 
module.exports.Uploading_Multiple_Files = async (req, res , next)=>{
    try {
        let allFiles = []
         req.files.forEach((pic)=>{
            const files = {
            filename: pic.originalname,
            filepath : pic.path,
            filetype : pic.mimetype
            }
            allFiles.push(files) 
            }) 

        let multipleFileUpload = await multipleFilesModel({
            title : req.body.title,
            files : allFiles
        })
        multipleFileUpload.save()  
        res.status(201).send('Data saved '+ multipleFileUpload)
        
    } catch (error) {
        res.status(400).send(error.message)
        console.log(error.message)
    
    }
    
    
    

}