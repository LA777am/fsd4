expr= require("express")
app = expr()
app.use(expr.urlencoded({"extended":true}))
app.get("/form",(req,res)=>{
    app.use(expr.static("./", {index:"t3.html"}))
    res.send()
})

app.post("/calc", (req,res)=>{
    if(parseInt(req.body.n1)>0 && parseInt(req.body.n2>0)){
        let a= parseInt(req.body.n1)
        let b = parseInt(req.body.n2)>
        res.send("Done!")
    }
    else{
        res.send(`<h1>Lindly Enter Valid Number</h1>`)
    }
    if(req.body.formula==""){
        res.write(`<h1>Formula Note selected`)
        res.send()
    }
    else if(req.body.formula=="add"){
        res.write(a+b)
        res.send()
    }
    else if(req.body.formula=="sub"){
        res.write(a-b)
        res.send()
    }
    else if(req.body.formula=="mul" ){
        res.write(a*b)
        res.send()
    }
    else if(req.body.formula== "div"){
        res.write(a/b)
        res.send()
    }
})

app.listen(5006)