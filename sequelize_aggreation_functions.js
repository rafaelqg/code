const { Sequelize, DataTypes,Op} = require('sequelize'); //npm install --save sequelize , npm install --save mysql2
const MYSQL_IP="localhost";
const MYSQL_LOGIN="root";
const MYSQL_PASSWORD="root";
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
    attributes: [
        "staff_id",
        sequelize.fn("COUNT", sequelize.col("payment_id")),
        [sequelize.fn("SUM", sequelize.col("amount")), "SUM amount($)"],
        sequelize.fn("MD5", sequelize.col("staff_id")),
      ],
      group: 'staff_id',
      raw: true
  });
  console.log("returnedEntries", returnedEntries);
 }catch(e){
  console.error("error", e);
 }
};
filterPayments();
