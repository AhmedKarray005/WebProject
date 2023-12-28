const { DataTypes } = require("sequelize");
const { sequelize } = require("../Configurations/ConnectDb");

const Donor = sequelize.define(
  "Donor",
  {
    donor_id: {
      type: DataTypes.INTEGER,primaryKey:true
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    birthday: {
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
    role: {
      type: DataTypes.ENUM('user', 'admin'), // Corrected type definition
      defaultValue: 'user' // Corrected default value definition
    }
  },
  {
    timestamps: false,
    tableName: 'donor',
  }
);

module.exports = Donor;
