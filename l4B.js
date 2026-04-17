expr= require("express")
app = expr()
app.get("/form", (req,res)=>{
    app.use(expr.static("./", {index:"t4.html"}))
    res.send()
})
app.use(expr.urlencoded({"extended":true}))
app.post("/process-post", (req,res)=>{
    fn=req.body.username
    pw= req.body.password
    g= req.body.r1
    c= req.body.comment
    res.set(200,{"content-type":"text/html"})
    res.send(`<h2 style="color:red">${fn}</h2> <br>
       <h2 style="color:green">${pw}</h2> <br>
       <h2 style="color:blue">${g}</h2> <br>
       <h2 style="color:pink">${c}</h2> `)
})
app.listen(3003)