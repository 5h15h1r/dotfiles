const fs = require('fs')


filename = process.argv[2];

fs.watch(filename, ()=>{
    console.log(`file ${filename} hase changed`);
})
