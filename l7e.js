fs = require('fs')
http = require('http')

http.createServer((req,res) => {
    if(req.url === '/'){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1> Hello </h1>")
        res.end()
    }

    else if(req.url === '/about'){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1> About page </h1>")
        res.end()
    }

    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("Page not found")
    }
}).listen(3008)