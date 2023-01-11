const {Sequelize} = require('sequelize');

//creamos una instamacia cpon param,etros de configuracion de base de datos

const db = new Sequelize({
  database: "todoapp",
  username: "mac",
  host: "localhost",
  port: "5432",
  password:"",
  dialect:"postgres"

});

module.exports = db;
