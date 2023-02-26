const fs = require('fs');

let counter = 0
fs.watch('target.txt', ()=>{
    counter += 2
    
})
const totalC = () =>{
    console.log(`no of changes ${counter/2}`)
}
totalC()
console.log("looking file for changes");
