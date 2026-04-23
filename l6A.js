expr= require("express")
app= expr()
ss= require("express-session")
app.use(expr.static("./", {index:"l6form.html"}))
app.use(ss({
    secret: "secret key",
    resave: true,   
    saveUninitialized: false,
    cookie: {maxAge:10000, httpOnly: true}
}))
app.get("/login",(req,res)=>{
    req.session.username= req.query.username
    req.session.password= req.query.password
    res.redirect("/fetch")
})
app.get("/fetch",(req,res)=>{
    res.set({"content-type":"text/html"})
    res.write(`<h2>Welcome ${req.session.username}...!!!! </h2><br><h2>your password : ${req.session.password}</h2>`)
    res.write(`<a href= "/destroy">Logout</a>`)
    res.send()

})
app.get("/destroy", (req,res)=>{
    res.clearCookie("connect.sid")
    res.redirect("/login")
    res.send()
})
app.listen(5006)