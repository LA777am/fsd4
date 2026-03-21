let url = "https://localhost:8000/test?T1=25&T2=24&T3=25#ABC"
let u= require("url")
let data = u.parse(url,true)
console.log(data.query)
let m1 = parseInt(data.query.T1)
let m2 = parseInt(data.query.T2)
let m3 = parseInt(data.query.T3)
console.log(m1 +" "+ m2+" " + m3)
console.log((m1+m2+m3)/3)
