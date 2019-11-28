'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize = new Sequelize('postgres://cjhhtyxtkracad:638a694ffa9a294a71c096b876ff7b859813f18d6a4e53f97bf16a7307e872f0@ec2-184-73-176-11.compute-1.amazonaws.com:5432/daonrqu1u93cov')


fs.readdirSync(__dirname)
  .filter(file => {
    return (
       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
