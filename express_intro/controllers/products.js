const path = require('path');
const rootDir = require('../util/path');


exports.showProductPage = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
};

exports.showAddProductPage = (req,res,next)=>{
    
    res.sendFile(path.join(rootDir,'views','add-product.html'));
    
};

exports.postAddProductPage = (req,res,next)=>{
    //console.log(req.body);
    res.redirect('/shop');
};