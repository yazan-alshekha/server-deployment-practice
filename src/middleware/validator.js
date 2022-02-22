'use strict';

const validator=(req,res,next)=>{
    // console.log('ssssss',req.query);
    if (req.query.name){
        next();
    }
    else{
        //we need to add any string as argument to force it goes to 404 handlers 
        next('x')
    }
}

module.exports = validator ;
