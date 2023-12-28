const Donation = require("../models/Donation");

const postDonation = async (req, res) => {
    try {
        const newDonation = req.body;
        
        // Log the data being sent
        console.log("Received Donation Data:", newDonation);
//INSERT INTO donations (/* list of columns */) VALUES (/* corresponding values */);
        const createdDonation = await Donation.create(newDonation);
        res.status(200).json({ Donation: createdDonation, msg: "Donation added successfully" });
    } catch (error) {
        console.error("Error on adding Donation:", error);
        res.status(500).json({ msg: "Error on adding Donation", error: error.message });
    }
};


const getDonations = async (req, res) => {
    try {
        //SELECT * FROM donations;

        const donations = await Donation.findAll();
        res.status(200).json({ Donations: donations });
    } catch (error) {
        res.status(500).json({ msg: "Error on getting Donations", error: error.message });
    }
};
const getOneDonation = async (req, res) => {
    const id = req.params.id;
    try {
        //SELECT * FROM donations WHERE id = /* id */;

        const foundDonation = await Donation.findByPk(id);
        if (foundDonation) {
            res.status(200).json({ Donation: foundDonation });
        } else {
            res.status(404).json({ msg: "No Donation found with the given ID" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error on retrieving the Donation" });
    }
};


const deleteDonation = async (req, res) => {
    const id = req.params.id;
    try {
        //DELETE FROM donations WHERE id = /* id */;

        const deleteCount = await Donation.destroy({
            where: { id: id },
        });

        if (deleteCount > 0) {
            res.status(200).json({ msg: "Donation deleted successfully" });
        } else {
            res.status(404).json({ msg: "Donation not found" });
        }
    } catch (error) {
        console.error("Error on deleting Donation:", error);
        res.status(500).json({ msg: "Error on deleting Donation", error: error.message });
    }


   


};
const getDonationsByNature = async (req, res) => {
    try {
        // Extract filter parameters from request
        const { nature } = req.query;

        // Build filter object based on provided parameters
        const filter = {};
        if (nature) {
            filter.nature = nature;
        }

        // SQL Query: SELECT * FROM donations WHERE nature = 'provided_nature';
        const donations = await Donation.findAll({ where: filter });

        res.status(200).json({ Donations: donations });
    } catch (error) {
        res.status(500).json({ msg: "Error on getting Donations", error: error.message });
    }
};
const getDonationsByNorD = async (req, res) => {
    try {
        // Extract filter parameters from request
        const { npo_id, donor_id } = req.query;

        // Build filter object based on provided parameters
        const filter = {};
        if (npo_id) {
            filter.npo_id = npo_id;
        }
        if (donor_id) {
            filter.donor_id = donor_id;
        }

        // SQL Query: SELECT Donation.*, NPO.*, Donor.* FROM Donation JOIN NPO ON NPO.npo_id = Donation.npo_id JOIN Donor ON Donor.donor_id = Donation.donor_id WHERE Donation.npo_id = 'provided_npo_id' AND Donation.donor_id = 'provided_donor_id';
        
        const donations = await Donation.findAll({
            include: [
                { model: NPO, where: { npo_id: filter.npo_id } },
                { model: Donor, where: { donor_id: filter.donor_id } }
            ]
        });

        res.status(200).json({ Donations: donations });
    } catch (error) {
        res.status(500).json({ msg: "Error on getting Donations", error: error.message });
    }
};


const getDonationsById = async (req, res) => {
   
    try {
        const {donor_id}=req.params
        // SELECT * FROM donors WHERE donor_id = /* id */;
        const foundUser = await Donation.findAll({ where: { donor_id: donor_id } });
        if (foundUser) {
            res.status(200).json({ Donations: foundUser });
        } else {
            res.status(404).json({ msg: "No Donor found with the given ID" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error on retrieving the Donor" });
    }
};

module.exports = { postDonation, getDonations, deleteDonation, getOneDonation, getDonationsByNature,getDonationsByNorD , getDonationsById};
