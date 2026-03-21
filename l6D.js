u= require("url")
addr="https://www.google.com/search?q=good+morning&oq=good+morning+&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyCggBEAAYsQMYgAQyCggCEAAYsQMYgAQyCggDEAAYsQMYgAQyBwgEEAAYgAQyCggFEAAYsQMYgAQyCggGEAAYsQMYgAQyBwgHEAAYgAQyCggIEAAYsQMYgAQyBwgJEAAYgATSAQgxODk1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
let d = u.parse(addr)
console.log(d)