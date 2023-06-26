const { Sequelize, DataTypes} = require('sequelize'); //npm install --save sequelize , npm install --save mysql2
const MYSQL_IP="localhost";
const MYSQL_LOGIN="root";
const MYSQL_PASSWORD="root";
const DATABASE = "sakila";
const sequelize = new Sequelize(DATABASE, MYSQL_LOGIN, MYSQL_PASSWORD,{host:MYSQL_IP, dialect: "mysql"});
const Customer = sequelize.define('Customer', {
  customer_id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  first_name: {type: DataTypes.STRING,allowNull: false },
  last_name: {type: DataTypes.STRING, allowNull: false },
  email: {type: DataTypes.STRING},
  address_id: {type: DataTypes.INTEGER}
  }, {tableName: 'customer',timestamps: false});
const Payment = sequelize.define('Payment', { 
  payment_id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true  },
  amount: {type: DataTypes.DOUBLE },
  customer_id: {type: DataTypes.STRING,  allowNull: false},
  payment_date: { type: DataTypes.DATE}
  }, { tableName: 'payment',timestamps: false});
Customer.hasMany(Payment, {foreignKey: 'customer_id'});
let testConnection = async function(){
  try {
    let customer = await Customer.findOne({where:{customer_id:5},include: Payment}) ;
    let payments = await customer.getPayments();
    console.log("Payments (eager load)",customer.Payments.length, customer.Payments);
    console.log("Payments (lazy load)", payments.length, payments);
    
  } catch (error) { console.error("Error log", error);}
}
testConnection();
