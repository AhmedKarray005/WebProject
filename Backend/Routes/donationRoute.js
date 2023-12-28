const express = require("express");
const donationRoute = express.Router();
const {
    postDonation,
    getDonations,
    deleteDonation,
    getOneDonation,
    getDonationsById,
    getDonationsByNorD
} = require("../Controllers/donationController");

donationRoute.get("/Donations", getDonations);
donationRoute.post("/Donations", postDonation);
donationRoute.get("/Donations/:id", getOneDonation);
donationRoute.delete("/Donations/:id", deleteDonation);
donationRoute.get("/DonationsById/:donor_id", getDonationsById);
donationRoute.get("/DonationsNorD", getDonationsByNorD);

module.exports = donationRoute;
