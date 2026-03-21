let addr = "http://localhost:8000/default.html?year=2026&month=March#warupdate";
url= require("url")
let data= url.parse(addr,true)
fs= require("fs")
fs.writeFileSync("hello1.txt", JSON.stringify(data.query))
