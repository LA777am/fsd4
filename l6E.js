let url = "https://localhost:8000/data?name=Jay&age=25"
let data= new URL(url) 
console.log(data)
console.log(data.searchParams.get("name"))
console.log(data.searchParams.get("age"))