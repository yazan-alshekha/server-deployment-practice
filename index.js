'use strict';

const server=require('./src/server');

const {db} = require('./src/models/index');

//to allow this file reading from ".env" file 
require('dotenv').config();


db.sync().then(()=>{
    
    server.start(process.env.PORT || 3010);
})
