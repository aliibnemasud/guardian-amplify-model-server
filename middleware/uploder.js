const multer = require("multer");
const path = require('path');

// Storage
const storage = multer.diskStorage({
    destination: "kml/",
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  })

 // Uploader 
const uploader = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const supportedFiles = /kml|png/;

        const extension = path.extname(file.originalname);

        if(supportedFiles.test(extension)){
            cb(null, true)
        } else {
            cb(new Error("Must be a example.kml files"))
        }
    },
    limits: {
        fileSize: 5000000
    }

})


module.exports = uploader;