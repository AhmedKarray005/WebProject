const { DataTypes } = require("sequelize");
const { sequelize } = require("../Configurations/ConnectDb");
const Donor = require("./Donor");
const NPO = require("./NPO"); 

const Donation = sequelize.define(
  "Donation",
  
    {
      
    coordinates: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.TIME,
    },
    day: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    nature: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.DECIMAL(10, 5),
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  
  },
  {
    timestamps: false,
    tableName: 'donation',
  },
  );
Donation.belongsTo(Donor, { foreignKey: 'donor_id' });
Donation.belongsTo(NPO, { foreignKey: 'NPO_id' });




module.exports = Donation;