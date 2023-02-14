const path = require('path');
const rootDir = require('../util/path');


exports.show404 = (req,res,next)=>{
    //res.status(404).send('<h1>Page not found</h1>');
    res.status(404).sendFile(path.join(__dirname,'../views','404.html'));
};