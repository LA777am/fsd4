const http=require("http")
 fs=require("fs")
http.createServer((req,res)=>{
    if(req.url==="/"){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1>Hello</h1> ")
    res.end()
  }
  else if(req.url=="/htmlpage"){
    data=fs.readFileSync("t5.html")
    res.writeHead(200,{"content-t ype":"text/html"})
    res.write(data)
    res.end()
  }
  else{
    res.writeHead(404,{"content-type":"text/html"})
    res.end("page not found")
  }
}).listen(3006)
