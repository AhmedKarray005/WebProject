const { Sequelize , DataTypes} = require("sequelize");
const {sequelize}=require("../Configurations/ConnectDb")
const Donor = require("./Donor");
const NPO = require("./NPO"); 
const Request = sequelize.define("Request", {
id: {
type: DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true,
}
}, {timestamps: false ,} // Add this to disable the default timestamps
);
Request.belongsTo(Donor, { foreignKey: 'donor_id' });
Request.belongsTo(NPO, { foreignKey: 'NPO_id' });
module.exports=Request;
