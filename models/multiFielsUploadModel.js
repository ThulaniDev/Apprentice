const mongoose = require('mongoose')

const schema = mongoose.Schema
let fileSchema = new schema({
    title : {
        type : String,
        required : true
    },
    files: [Object],
    


}, {
    timestamps : true 
})

let fileUploadModel = mongoose.model('Multiple-Files', fileSchema)

module.exports = fileUploadModel