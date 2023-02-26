const { count } = require('console');
const fs = require('fs');


fs.watch('target.txt', ()=>{
    count
})

console.log("looking file for changes");
