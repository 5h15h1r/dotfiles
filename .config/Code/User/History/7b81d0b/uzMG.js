const fs = require('fs');

let counter = 0
fs.watch('target.txt', ()=>{
    counter += 2
    
})
const totalC = () =>{
    console.log();
}
console.log("looking file for changes");
