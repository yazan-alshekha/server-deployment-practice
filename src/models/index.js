"use strict";

// don't forget to install --> npm i pg ,sequelize
// built in functions we should use them as they are 
const {Sequelize,DataTypes} =require("sequelize"); 
const clothes = require('./clothes.model.js');
const food = require('./food.model.js');
require('dotenv').config();// to read from the .env file 

// const POSTGRESS_URL=process.env.DATABASE_URL;

//prepare the connection
// connect to our DB depending on the URL as an environmental variable
// for more information check 401d14 class4 record02 testing db
//also add NODE_ENV =test to your package.json
const POSTGRESS_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL; // npm i sqlite3



// something static from the documentation if you want to deploy oon Heroku

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};


// let sequelize = new Sequelize(POSTGRESS_URL);
let sequelize = new Sequelize(POSTGRESS_URL,sequelizeOptions);


module.exports = {
    db : sequelize,//for real connection and will use it in index.js
    food : food( sequelize , DataTypes),// for creating the table and will use it in our routes
    clothes : clothes( sequelize , DataTypes),// for creating the table and will use it in our routes
}

