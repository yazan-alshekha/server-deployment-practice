"use strict";

const {Sequelize,DataTypes} =require("sequelize"); // npm i pg ,sequelize
const clothes = require('./clothes');
const food = require('./food');

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



let sequelize = new Sequelize(POSTGRESS_URL,sequelizeOptions);


module.exports = {
    db = sequelize,
    food = food( POSTGRESS_URL , DataTypes),//for real connection and will use it in index.js
    clothes = clothes( POSTGRESS_URL , DataTypes),// for creating the table and will use it in our routes
}