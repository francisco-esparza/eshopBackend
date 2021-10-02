require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_PRODUCTION_NAME_BD,
    process.env.DB_PRODUCTION_USER,
    process.env.DB_PRODUCTION_PASSWORD, {
        host: process.env.DB_PRODUCTION_NAME_SERVER,
        dialect: "mysql"
    }
);

module.exports = sequelize;