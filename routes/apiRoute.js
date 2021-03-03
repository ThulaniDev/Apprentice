//api routes here
const express = require('express')
const upload  = require('../controllers/uploadingConfigs')
const multipleFilesUploads = require('../controllers/fileUploadingAPIs')
const router =  express.Router()

router.post('/multiple-files-upload', upload.upload.array('files'), multipleFilesUploads.Uploading_Multiple_Files )

module.exports = router