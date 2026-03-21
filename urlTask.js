const url = require("url");
const querystring = require("querystring");

let addr = "http://localhost:8000/default.html?year=2026&month=March#warupdate";
let q = url.parse(addr);
let data = querystring.parse(q.query);
console.log(data);       
console.log(data.year);  

if ((data.year % 4 === 0 && data.year % 100 !== 0) || data.year % 400 === 0) {
    console.log(data.year + " is leap year");
} else {
    console.log(data.year + " is not a leap year");
}
