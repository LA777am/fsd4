rn= {"Rohit":52, "Kohli":96, "Gill":20, "Rahul":33, "tilak":30}
aa= {"hardik":52}
fs= require("fs")
fs.writeFileSync("scores.txt",JSON.stringify(rn))
data = fs.readFileSync("scores.txt")
data1= JSON.parse(data)
data1["Hardik"]= 52
console.log(data1)
tt=0
for(let i in data1){
    tt+=data1[i] 
}
rr= tt/20
arr=[]

for(let i in data1){
    if(data1[i]>50){
        arr.push(i)
    }
}
fs.writeFileSync("scores.txt","\n"+ JSON.stringify(rn))
fs.appendFileSync("scores.txt", "\n run rate : "+JSON.stringify(rr))
fs.appendFileSync("scores.txt", "\n total : "+JSON.stringify(tt)+"\n")
fs.appendFileSync("scores.txt","Players Above 50 runs : \n")
for(let i of arr){
    fs.appendFileSync("scores.txt",JSON.stringify(i)+"\n")
}
data3= fs.readFileSync("scores.txt")
console.log(JSON.parse(data3))