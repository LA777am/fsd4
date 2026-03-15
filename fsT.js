// fs= require("fs")
// fs.writeFileSync("in.txt", "0 1 -9 20 33 -44 50", (err)=>{
//     if(err) throw err
// })
// fs.readFile("in.txt", "utf-8", (err,data)=>{
//     if(err) throw err
//     let data2 = data.trim().split(" ").map(Number)
//     let data3 = data2.sort((a,b)=>a-b)
//     console.log(data2)
//     fs.appendFile("in.txt", "\n"+data3, (err)=>{
//         if(err) throw err
//     })

// })


// const obj= {"name" : "ayush", "age":20}
// fs.writeFileSync("in.txt", JSON.stringify(obj))
// fs.readFile ("in.txt", "utf-8", (err,data)=>{
//     if(err) throw err
//     let data2= JSON.parse(data)
//     console.log(data2.name)
//     console.log(data2.age)

// })


// const shape=[{name:"circle",diameter:8},{name:"square",side:10}]
// for(i of shape){
//     if(i.name=="circle"){
//         peri = 2*3.14*i.diameter
//     }
//     else{
//         peri2= 4*i.side
//     }
// }
// fs = require("fs")
// fs.writeFileSync("shape.txt", "Circle : "+peri+ " Square : "+ peri2)


// const a= {data:{a:15,b:20,c:[40,30]}}
// fs = require("fs")
// fs.writeFileSync("in3.txt", JSON.stringify(a))
// fs.readFile("in3.txt", "utf-8", (err,data)=>{
//     if(err) throw err
//     const x= JSON.parse(data)
//     let add= x.data.a + a.data.b
//     let sub = x.data.c[1]-x.data.b 
//     let mul = x.data.c[0]*x.data.c[1]
//     fs.writeFileSync("output.txt", "add : "+add+" sub : "+sub+ " mul : "+mul)
// })


fs =require("fs")
fs.writeFileSync("in4.txt", "0 20 30 40 50")
fs.readFile("in4.txt", "utf-8", (err,data)=>{
    let a = data.split(" ")
    let b = a.sort((a,b)=>b-a)[0]
    fs.appendFileSync("in4.txt", "max :" +b)
})
