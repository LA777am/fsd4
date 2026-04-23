expr= require("express")
app = expr()
ss= require("express-session")
app.use(expr.static("./", {index:"l6form.html"}))
app.use(ss({
    secret:"secret key",
    resave:true,
    saveUninitialized:false,
    cookie : {maxAge:10000, httpOnly:true}
}))
app.get("/save-session", (req,res)=>{
    req.session.username = req.query.username
    req.password.password= req.query.password
    res.redirect("/fetch-session")
    res.send()
})
app.get("/fetch-session", (req,res)=>{
    res.set({"content-type":"text/html"})
    res.write(`<h2>Welcome ${req.session.username}...!!!! </h2><br><h2>your password : ${req.session.password}</h2>`)
    res.write(`<button href = "/logout">LOGOUT</button>`)
    res.send()
})
app.get("/logout", (req,res)=>{
    res.set({"content-type":"text/html"})
    res.redirect("/")
    res.send()
})