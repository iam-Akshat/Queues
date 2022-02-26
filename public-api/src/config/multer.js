const multer  = require('multer')
// limits omitted intentionally
const upload = multer({
     storage: multer.diskStorage({
         destination:'uploads/',
         filename:(req,file,cb)=>{
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null,uniqueSuffix+file.originalname)
         }
        })
    })



module.exports = upload;