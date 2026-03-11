    const a= {

    "Datastructures":
    [
        {
            "Name": "tree",

            "course":"Intro",

            "content":["1","B","C"]
        },
        {
            "Name": "tree1",

            "course":"Intro1",

            "content":["1","B","C","d"]
        }
    ],
    "xyz":
    {
        "Name":"Graphics",
        "Topic":["BFS","CDF","Sorting"],
    }
}
console.log(a.Datastructures[0].Name)
console.log(a.Datastructures[1].Name)
console.log(a.xyz.Name)
console.log(a.xyz.Topic)
console.log(a.xyz.Topic[0])
console.log(a.Datastructures[1])
console.log(a.xyz)




const sub =

{

"FSD": [

{

"Topic": "HTML",

"course": "Beginer",

"content": ["tags", "table", "form"],

},

{

"Topic": "CSS",

"course": "Beginer",

"content": ["tags", "table", "form"]

}

]};

for(let i in sub){
    console.log(i, sub[i])
}
console.log('-------------------')
for(let [key,val] of Object.entries(sub)){
    console.log([key,val])
}



myObj = {

           	"name" : "John",

           	"age" : 30,

           	"cars" : [

                       	{ "name" : "Ford",  "models":[ "Fiesta", "Focus", "Mustang" ] },

                       	{ "name" : "BMW", "models" : [ "320", "X3", "X5" ] },

                       	{ "name" : "Fiat", "models" : [ "500", "Panda" ] }

         	] }
            console.log('---------------')
            console.log(`${myObj.name} has ${myObj.cars[1].name} ${myObj.cars[1].models[1]}`)




function ab(x){
    const y={}
    for(let i=0; i<x.length; i++){
        y[x[i][0]]=x[i][1]
    }
    console.log(y)

}
ab([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])


function ab2(x){
    const y2={}
    y2[x[0]]=x[x.length-1]
    console.log(y2)
}
ab2(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])

const abc=[

{

name: "PQR", age: 38

},

{

name: "ABC", age: 35

},

{

name: "XYZ", age: 47

}

]
function ab3(x){
    let h=0
    let n =""
    for(let i=0; i<x.length; i++){
        if(h<x[i].age){
            h=x[i].age
            n= x[i].name
        }
    }
    console.log(h)
    console.log(n)

}
ab3(abc)

var test = { "division1": {

"name":["Z","B","H"]

},

"division2": {

"name" :["Y","A","G"]

}

}
let a1 =test.division1.name.sort((a, b) => b- a)
let a2 =test.division2.name.sort((a, b) => b - a)

console.log(a1.concat(a2))


