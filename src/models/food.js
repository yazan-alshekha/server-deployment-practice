"use strict";

const Food=(sequelize,dataType)=> sequelize.define('food',{
    name:{
        type:dataTypes.STRING,
        allowNull:false
    },
    expiry_date:{
        type:dataType.DATEONLY,
    }
})

module.exports = Food;