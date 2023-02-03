let sequelize = require('../util/database');
let Sequelize = require('sequelize');

//create a table for users 
let Users = sequelize.define('user' ,{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    name :Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    phone:Sequelize.STRING,
    password:Sequelize.STRING,
});

module.exports = Users ;