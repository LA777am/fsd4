const http =  require("http")
let server= http.createServer((req,res)=>{
    res.writeHead(200, {"content-type": "text/html"})
    res.write("HIII")
    res.write("<h1>HEllo server </h1>")
    res.end("how r u")
})
server.listen(6008,()=>{
    console.log("connected ")
})








