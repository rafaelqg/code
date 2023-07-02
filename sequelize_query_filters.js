const { Sequelize, DataTypes,Op} = require('sequelize'); //npm install --save sequelize , npm install --save mysql2
const MYSQL_IP="localhost";
const MYSQL_LOGIN="xxx";
const MYSQL_PASSWORD="xxx";
const DATABASE = "sakila";
const sequelize = new Sequelize(DATABASE, MYSQL_LOGIN, MYSQL_PASSWORD,{host:MYSQL_IP, dialect: "mysql"});
const Payment = sequelize.define('Payment', {
  payment_id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  amount: {type: DataTypes.DOUBLE, allowNull: false },
  staff_id:{type: DataTypes.INTEGER},
  }, {tableName: 'payment',timestamps: false});
async function filterPayments(){ 
  try{
  let returnedEntries = await Payment.findAll({
    where: {[Op.or]: [
        { [Op.and]: [{ staff_id: 1 }, { amount: {[Op.gt]: 3 }} ]},
        { [Op.and]: [{ staff_id: 2 }, { amount: {[Op.gt]: 5 }} ] }
      ]} 
  });
  console.log("returnedEntries", returnedEntries.length);
 }catch(e){
  console.error("error", e);
 }
};
filterPayments();
