fs = require('fs')
http = require('http')

http.createServer((req,res) => {
    if(req.url === '/'){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1> Hello </h1><img src = 'logo.png'>")
        res.end()
    }

    else if(req.url === '/logo.png'){
        data = fs.readFileSync("logo.png")
        res.writeHead(200,{"content-type":"image/png"})
        res.end(data)
    }

    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("Page not found")
    }
}).listen(3004)