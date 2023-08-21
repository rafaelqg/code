const { Sequelize, DataTypes, Op} = require('sequelize');

const MYSQL_IP="localhost";
const MYSQL_LOGIN="root";
const MYSQL_PASSWORD="root";
const DATABASE = "sakila";
const sequelize = new Sequelize(DATABASE, MYSQL_LOGIN, MYSQL_PASSWORD,{host:MYSQL_IP,port: 3306, dialect: "mysql"});

const Product = sequelize.define('Product', {
 product_id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
 description: {type: DataTypes.STRING,allowNull: false },
 unit_price: {type: DataTypes.DOUBLE, allowNull: false },
 }, {tableName: 'product',timestamps: false});

 async function run(){
    await Product.sync();
    await Product.truncate();
    let products = [
        { description: "Water", unit_price:3},
        { description: "Coffee", unit_price:5},
        { description: "Bread with cheese", unit_price:7},
    ];
    let result = await Product.bulkCreate(products);
    console.log("result", result);  
    let generatedIds = result.map(el => el.dataValues.product_id);
    console.log("generatedIds", generatedIds);
    //products = await Product.findAll();
 }
 run();
