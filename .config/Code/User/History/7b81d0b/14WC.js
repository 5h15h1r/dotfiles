const fs = require('fs');

let counter = 0
fs.watch('target.txt', ()=>{
    counter += 1
})

console.log("looking file for changes");
