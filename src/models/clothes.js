'use strict';
const clothes=(sequelize,datatype)=> sequelize.define('clothes',{
prodact_name:{
    type:datatype.STRING,
    allownull:false,
},
Production_date:{
    type:datatype.DATEONLY
}
});

module.exports = clothes;