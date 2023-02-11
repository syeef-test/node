const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('In the middleware!');
    next();//allow the request to continue to the next middleware in the line
});

app.use((req,res,next)=>{
    console.log('In another middleware!');
    res.send({ key1: "value" });
});

app.listen(3000);

