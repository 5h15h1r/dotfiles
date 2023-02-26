const fs = require('fs');

let counter = 0
fs.watch('target.txt', ()=>{
    counter += 2
    console.log(${counter/2})
})

console.log("looking file for changes");
