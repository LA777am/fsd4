// setTimeout(()=>{
//     console.log("displaying after 3 secs")
// },3000)

// setInterval(()=>{
//     console.log("during 3 sec")
// },3000)

// setInterval(()=>{
//     console.log(new Date().toLocaleString())
// },1000)

function main(cb) {
    console.log('Operation 1');
    console.log('Operation 2');
    cb("some result"); 
    setTimeout(() => {
        console.log("operation and");
    }, 2000);
}

function fun(result) {
    console.log("Final answer", result);
}

main(fun);
