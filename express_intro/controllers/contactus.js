const path = require('path');
const rootDir = require('../util/path');



exports.contactusController = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
};