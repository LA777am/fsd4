let EE=require("events")
let ee= new EE()
function deco(){
    console.log("decoration is finished")
}
function cater(){
    console.log("food is being prepared by cater")
}
function rel(){
    console.log("relatives have started arriving at venue")
}
function pt(){
    console.log("photographer is capturing memories")
}
function bg(){
    console.log("Bride and Groom are coming towards the Stage")
}
ee.on("mrgFunction",deco)
ee.on("mrgFunction", cater)
ee.on("mrgFunction",rel)
ee.on("mrgFunction",pt)
ee.on("mrgFunction",bg)
console.log("check my positon")
ee.emit("mrgFunction")
console.log("thank you for attending")