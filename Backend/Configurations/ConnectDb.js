const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const url = process.env.URL;
const sequelize = new Sequelize(url, {
    dialect: 'mysql'
});

const ConnectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to MySQL successfully.");
        await sequelize.sync();
    } catch (error) {
        console.error('Connection to MYSQL failed:', error);
    }
};

module.exports = { ConnectDb, sequelize };
