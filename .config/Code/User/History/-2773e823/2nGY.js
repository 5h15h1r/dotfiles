"use strict";
const
    fs = require('fs'),
    spwan = require('child_process').spawn,
    filename = process.argv[2];
if (!filename){
    throw Error('A file is needed to be watched');
}
fs.watch(filename, ()=>{
    let ls = spwan('ls',['-lh', filename])
    ls.stdout.pipe(process.stdout)
    console.log(`file ${filename} hase changed`);
})
console.log("now watching");