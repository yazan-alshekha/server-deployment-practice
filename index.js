'use strict';

const server=require('./src/server');

//to allow this file reading from ".env" file 
require('dotenv').config();

server.start(process.env.PORT || 3010);
