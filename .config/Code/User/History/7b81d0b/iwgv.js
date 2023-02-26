const fs = require('fs');


fs.watch('target.txt', ()=>{
    console.log('target.txt changed')
})

console.log("looking file for changes");
