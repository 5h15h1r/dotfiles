"use strict";
const
    net = require('net'),
    client = net.connect({port: 5432});
client.on('data', (data)=>{
    let message = JSON.parse(data)
})