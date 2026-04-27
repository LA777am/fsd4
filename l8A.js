multer = require("multer")

expr= require("express")
multer= require("multer")
app= expr()
app.use(expr.static('./public', {index:'multer.html'}))
Storage= multer.diskStorage({destination:'hi', filename : (req,file,cb)=>{
    cb(null,file.originalname)
}
})
upload= multer({Storage})
app.post('/data',upload.single('mypic'), (req,res)=>{
    const file = req.file
    if(file){
        res.send(`your file ${file.originalname}`)
    }
    else{
        res.send('not found')
    }

})
app.listen(5555)