'use strict';
const logger=(req,res,next)=>{

    console.log(`req.method is :${req.method} and the path is ${req.path}`);
    next();
}


module.exports = logger;

