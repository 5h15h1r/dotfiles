const fs = require('fs')


filename = process.argv[2];
if (!filename){
    throw Error('A file is needed to be watched');
}
fs.watch(filename, ()=>{
    console.log(`file ${filename} hase changed`);
})
