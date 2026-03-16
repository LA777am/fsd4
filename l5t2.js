EE= require("events")
ee= new EE()
// function conn(){
//     console.log("connection successful")
//     ee.emit("data")
// }
// function data1(){
//     console.log("data recieved successfully")
// }
// ee.on("con",conn )
// ee.on("data",data1)
// ee.emit("con")
// let d = ee.listenerCount("con")
// console.log(d)

// function a1() {
//     console.log("listener 2");
// }
// function a2() {
//     console.log("listener 1");
// }

// ee.on("ll", a2);
// ee.on("ll", a1);

// ee.emit("ll"); 

// ee.removeListener("ll", a1); 

// ee.emit("ll"); 

// let d1= ee.listenerCount("ll")
// console.log(d1)
// ee.emit("ll")
// ee.removeListener("ll", a1)
// ee.emit("ll")
// let d2=ee.listenerCount("ll")
// console.log(d2)
fs= require("fs")
// function a1(){
//     fs.writeFile("new.txt","This is data ",(err)=>{
//         if(err) throw err
//         ee.emit("func2")
//     })
// }
// function a2(){
//     fs.appendFile("new.txt", "\n that is data ", (err)=>{
//         if(err) throw err
//         ee.emit("func3")

//     })
// }
// function a3(){
//     fs.readFile("new.txt","utf-8",(err,data)=>{
//         if(err) throw err
//         console.log("data of new.txt  :::: "+ data)
//         ee.emit("func4")
//     })
// }
// function a4(){
//     console.log("thanks")
// }

// ee.on("func1", a1)
// ee.on("func2", a2)
// ee.on("func3", a3)
// ee.on("func4", a4)
// ee.emit("func1")

// let rad=55
// let s= 33
// function pos1(){
//     console.log("Radius is Positive")
//     let peri = 3.14*rad*2
//     console.log(peri)
// }   
// function nega1(){
//     console.log("radius is neagative")
// }
// function pos2(){
//     console.log("side is Positive")
//     let peri2 = s*4
//     console.log(peri2)
// }   
// function nega2(){
//     console.log("side is neagative")
// }
// function check1(a){
//     if(a<0){
//         ee.emit("func5")
//     }
//     else{
//         ee.emit("func3")
//     }
// }
// function check2(a){
//     if(a<0){
//         ee.emit("func6")
//     }
//     else{
//         ee.emit("func4")
//     }
// }
// ee.on("func1", () => check1(rad))
// ee.on("func2", () => check2(s))

// ee.on("func3", pos1)
// ee.on("func4", pos2)
// ee.on("func5", nega1)
// ee.on("func6", nega2)
// ee.emit("func1")
// ee.emit("func2")
// marks = [10,20,30,40,50]
// sum=0
// per=0
// function add(){
//     for(let i of marks){
//         sum+=i
//     }
//     console.log("Total Marks : "+ sum)
//     ee.emit("mark2")
// }
// function per1(s){
//     per= s/5
//     console.log("Percentage : "+ per)
// }
// ee.on("mark1", add)
// ee.on("mark2",() => per1(sum))
// ee.emit("mark1")

// fs.mkdir("test", (err)=>{
//     if(err) throw err
// })




function f1(){
    fs.writeFileSync("test/t9.txt","")
    fs.appendFileSync("test/t9.txt", "appending data ")
    ee.emit("f22")
}
function f2(){
    let d2= fs.readFileSync("test/t9.txt","utf-8")
    console.log(d2)
    ee.emit("f33")

}
function f3(){
    fs.copyFileSync("test/t9.txt","test/pqr.txt")
    console.log("copied")
    ee.emit("f44")

}
function f4(){
    fs.unlinkSync("test/t9.txt")
    console.log("all performed")
}
ee.on("f11",f1)
ee.on("f22",f2)
ee.on("f33", f3)
ee.on("f44",f4)
ee.emit("f11")

