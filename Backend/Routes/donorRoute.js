const express = require("express");
const donorRoute = express.Router();
const {
    postDonor ,
    getDonors , putDonor , getOneUser , deleteDonor , signIn , 
} = require("../Controllers/donorController");

const isAuth = require("../middleware/isAuth")
const isAutho=require('../middleware/isAutho')

donorRoute.get("/Donors",getDonors );
donorRoute.post("/Donors", postDonor);
// userRoute.put("/Donors/:id", putDonor);
donorRoute.delete("/Donors/:id",isAuth,isAutho(['admin']), deleteDonor);
// userRoute.delete("/users/:id",deleteUser);
donorRoute.get("/Profile", isAuth,isAutho(['user']), getOneUser);

donorRoute.post("/signIn", signIn);

module.exports = donorRoute;
