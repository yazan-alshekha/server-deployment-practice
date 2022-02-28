"use strict";

const {Sequelize,DataTypes} =require("sequelize"); // npm i pg ,sequelize
const clothes = require('./clothes.model.js');
const food = require('./food.model.js');
require('dotenv').config();// to read from the .env file 
const POSTGRESS_URL=process.env.DATABASE_URL;



// something static from the documentation

let sequelizeOptions =  {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
}



let sequelize = new Sequelize(POSTGRESS_URL);
// let sequelize = new Sequelize(POSTGRES_URL,sequelizeOptions);

module.exports = {
    db : sequelize,//for real connection and will use it in index.js
    food : food( sequelize , DataTypes),// for creating the table and will use it in our routes
    clothes : clothes( sequelize , DataTypes),// for creating the table and will use it in our routes
}

