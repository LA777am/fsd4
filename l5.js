// os= require("os")
// console.log(os.arch())
// console.log(os.freemem())
// console.log(os.tmpdir())


var EventEmitter= require("events")
var ee = new EventEmitter()
ee.on("mrgfunction", ()=>{
    console.log("Today is wedding day")
})
ee.emit("mrgfunction")
