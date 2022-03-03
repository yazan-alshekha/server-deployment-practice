'use strict';
const clothes=(sequelize,datatype)=> sequelize.define('clothes',{
prodact_name:{
    type:datatype.STRING,
    allownull:false,
}
});

module.exports = clothes;