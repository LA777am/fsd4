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
app.get("/login", (req,res)=>{
    res.set({"content-type":"text/html"})
    req.session.username = req.query.username
    req.session.password= req.query.password
    
    res.redirect("/fetchdata")
})
app.get("/fetchdata", (req,res)=>{
    res.set({"content-type":"text/html"})
    if(req.session.username =="admin" && req.session.password=="admin@123"){
        res.write(`<h2>Welcome ${req.session.username}...!!!! </h2><br><h2>admin's password : ${req.session.password}</h2>`)
        res.write(`<br><button><a href="destroy">LOGOUT</a></button>`)
        if (!req.session.username || !req.session.password) {
            return res.redirect("/session-expired");
        }
        res.send()
    }
    else{
        res.write(`<h2> invalid username or password</h2>`)
        res.write(`<br><button><a href ="/" >go back to login </a></button>`)
        res.send()
    } 
})
app.get("/destroy", (req,res)=>{
    res.set({"content-type":"text/html"})
    res.clearCookie("connect.sid")
    res.write(`<h2>successfully logged out</h2>`)
    res.write(`<br><button ><a href ="/" >go back to login </a></button>`)
})
app.get("/session-expired", (req, res)=>{
    res.set({"content-type":"text/html"})
    res.write(`<h2>Session expired</h2>`)
    res.write(`<br><button ><a href ="/" >go back to login </a></button>`)
    res.send()
})

app.listen(5006)