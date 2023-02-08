const http = require('http');




const server = http.createServer((req,res)=>{
    console.log("kazi");
});

server.listen(4000);