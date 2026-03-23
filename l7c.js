const http= require("http")
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    let data= {"name":"rohit", "runs":12}
    res.end(JSON.stringify(data))
}).listen(5006)
