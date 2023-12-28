
const { DataTypes } = require("sequelize");
const { sequelize } = require("../Configurations/ConnectDb");

const  NPO = sequelize.define(
  " NPO",
  {
    NPO_id: {
      type: DataTypes.INTEGER,primaryKey:true
    },
    Organization_name: {
      type: DataTypes.STRING,
    },
    foundation_date: {
      type: DataTypes.STRING,
    },
    
    address: {
      type: DataTypes.STRING,
    },
  
    phone_number: {
      type: DataTypes.STRING,
    },
  
    email_address: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'), // Corrected type definition
      defaultValue: 'user' // Corrected default value definition
    }
  },
  {
    timestamps: false,
    tableName: 'NPO', // Set the table name explicitly to 'NPO'
  }
);

module.exports =  NPO;
