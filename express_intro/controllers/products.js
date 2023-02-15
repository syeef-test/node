const path = require('path');
const rootDir = require('../util/path');


const Product = require('../models/products');



exports.showAddProductPage = (req,res,next)=>{
    
    res.sendFile(path.join(rootDir,'views','add-product.html'));
    
};

exports.postAddProductPage = (req,res,next)=>{
   
    const product = new Product(req.body.title);
    product.save();
    
    
    res.redirect('/shop');
    
    
};


exports.showProductPage = (req,res,next)=>{
    Product.fetchAll((products)=>{
        console.log(products);
    });
    //console.log(product);
    res.sendFile(path.join(rootDir,'views','shop.html'));
};