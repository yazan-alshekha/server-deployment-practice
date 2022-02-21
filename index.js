'use strict';

const server=require('./server');

//to allow this file reading from ".env" file 
require('dotenv').config();

server.start(process.env.PORT || 3010);
