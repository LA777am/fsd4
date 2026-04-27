multer = require("multer")

expr= require("express")
app= expr()
multer= require("multer")
app.use(expr.static('./public', {index:'t4mul.html'}))
Storage=multer.diskStorage({destination:'task4', filenma :
    (req,filke,cb)=>{
        cb(null, file.originalname)
}})
upload= multer({storage: Storage, limits:{fileSize:1024}})

app.post('/data', upload.single('mycv'), (req,res)=>{
    const file = req.file
    if(file){
        res.send(`your file name ${file.originalname}`)    
    }
    else{
        res.send("not found")
    }
})

app.listen(5000)