"use strict";
const 
    net = require('net');
    server = net.createServer((connection)=>{
        console.log('client connected');
        
        connection.write(
            '{"type":"changed", "file":"targ'
        )

        let timer = setTimeout()
    })