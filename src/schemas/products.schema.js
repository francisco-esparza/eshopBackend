const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db.sql');


class Products extends Model {}
Products.init({
        IdProduct: {
           type:  DataTypes.INTEGER,
           primaryKey: true
        },
        ProductName: DataTypes.STRING,
        Price: DataTypes.FLOAT,
        Img: DataTypes.STRING,
        Departament: DataTypes.STRING,
        Class: DataTypes.STRING,
        SubClass: DataTypes.STRING
    }, {
        sequelize,
        modelName: "Products",
        timestamps: false
});

module.exports = Products;