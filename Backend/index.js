const express = require("express");
const { ConnectDb } = require('./Configurations/ConnectDb');
const dotenv = require("dotenv");

const donorRoute = require("./Routes/donorRoute");
const NpoRoute = require("./Routes/NpoRoute");
const donationRoute = require("./Routes/donationRoute");
const requestRoute = require("./Routes/requestRoute"); // Include the new route

dotenv.config();
const cors = require("cors");

const app = express();
const port = process.env.PORT;
app.use(cors());

ConnectDb();

app.listen(port, (error) => {
    if (error) {
        console.log("Server Failed");
    } else {
        console.log(`Server Started on port ${port}`);
    }
});
app.use(express.json());
app.use("/api", donorRoute);
app.use("/api", NpoRoute);
app.use("/api", donationRoute);
app.use("/api", requestRoute);
