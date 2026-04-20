expr= require("express")
app= expr()
cp = require("cookie-parser")
app.use(cp())
app.use(expr.static("./", {"index":"l5B.html"}))
app.use(expr.urlencoded({"extended":true}))
app.get("/submit-feedback",(req,res)=>{
    const {name, email, msg, feedback} =req.body
    const fb= {name,email,msg, feedback}
    res.cookie("name", req.body.name)
    res.cookie("TEXT", req.body.message)
    res.cookie("emial", req.body.email)
    res.send()
})
app.get("/feedback", (req,res)=>{
    res.send("Thank you for your feedback "+JSON.stringify(fb))
})
app.listen(5000)
