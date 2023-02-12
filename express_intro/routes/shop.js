const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    //console.log('This allways run');
    //next();
    res.send('<h1>Hello from express</h1>');
    //next();
});

module.exports = router;