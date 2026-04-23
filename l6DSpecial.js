expr= require("express")
app = expr()
ss= require("express-session")
path= require("path")
app.use(expr.urlencoded({extended:true}))
app.use(expr.static("./public", {index:"index.html"}))
app.use(ss({
    secret:"secret key",
    resave:true,
    saveUninitialized:false,
    cookie : {maxAge:10000, httpOnly:true}
}))

app.post("/login", (req,res)=>{
    res.set({"content-type":"text/html"})
    req.session.username = req.body.username
    req.session.password= req.body.password
    
    res.redirect("/order-get")
})
app.get("/order-get", (req,res)=>{
    res.sendFile(path.join(__dirname,"public", "order.html"))
})
app.post("/order", (req,res)=>{
    res.set({"content-type":"text/html"})
    req.session.product = req.body.product
    req.session.quantity= req.body.quantity
    res.redirect("/summary")
})
app.get("/summary", (req,res)=>{
    res.set({"content-type":"text/html"})
    res.write(`<h2>Welcome !!</h2><br   >`)
    res.write(`<h2>username : ${req.session.username}</h2><br>`)
    res.write(`<h2>product: ${req.session.product}</h2><br>`)
    res.write(`<h2>quantity: ${req.session.quantity}</h2><br>`)
    res.write(`<br><button><a href="destroy">LOGOUT</a></button>`)
    res.send()
})
app.get("/destroy", (req,res)=>{
    res.set({"content-type":"text/html"})
    res.clearCookie("connect.sid")
    res.write(`<h2>successfully logged out</h2>`)
    res.write(`<br><button ><a href ="/" >go back to login </a></button>`)
})
app.listen(5006)