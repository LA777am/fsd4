multer = require("multer")

expr= require("express")
app= expr()
multer= require("multer")
app.use(expr.static('./public', {index: 't4mul.html'}))
storage = multer.diskStorage({destination:'govn', filename: (req,res,cb)=>{
    cb(null, file.originalname)
}})
upload= multer({storage: storage, limits:{file}})
