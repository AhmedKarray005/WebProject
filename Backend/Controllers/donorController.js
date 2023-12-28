const jwt = require("jsonwebtoken");
require('dotenv').config();

const Donor = require("../models/Donor");


const postDonor = async (request, response) => {
    try {
        const newDonor = request.body;

        // Check if the donor with the given email already exists

        const foundDonor = await Donor.findOne({ where: { email_address: newDonor.email_address } });

        if (foundDonor) {
            response.status(400).json({ msg: "Donor already exists" });
        } else {
            // Create a new donor instance
            //INSERT INTO donors (/* list of columns */) VALUES (/* corresponding values */);

            const createdDonor = await Donor.create(newDonor);

            // Respond with the created donor and success message
            response.status(200).json({ Donor: createdDonor, msg: "Donor added successfully" });
        }
    } catch (error) {
        console.error("Error on adding Donor:", error);
        response.status(500).json({ msg: "Error on adding Donor", error: error.message });
    }
};




const getDonors = async (req, res) => {
    try {
        //SELECT * FROM donors;

        const  Donors = await Donor.findAll();
        console.log(Donors);
        res.status(200).json({ Donors: Donors });
    } catch (error) {
        res.status(500).json({ msg: "Error on getting Donors", error: error.message });
    }
};


const putDonor = async (req, res) => {
    const id=req.params.id;
    const user=req.body
    console.log(user)
    try {
        //UPDATE donors SET /* column1 = value1, column2 = value2, ... */ WHERE id = /* id */;

        await Donor.findByIdAndUpdate(id,user)
        res.status(200).json({ msg: "update success" });
    } catch (error) {
        res.status(500).json({ msg: "error on updating Donor" });
    }
};

const deleteDonor = async (req, res) => {
    const id=req.params.id;
       console.log(id);
  
    try {
        //DELETE FROM donors WHERE id = /* id */;

      const deleteCount = await Donor.destroy({
        where: { donor_id: id },
      });
  
      if (deleteCount > 0) {
        res.status(200).json({ msg: "Donor deleted successfully" });
      } else {
        res.status(404).json({ msg: "Donor not found" });
      }
    } catch (error) {
      console.error("Error on deleting user:", error);
      res.status(500).json({ msg: "Error on deleting user", error: error.message });
    }
  };
  


  const getOneUser = async (req, res) => {
    const id = req.user.donor_id;
    try {
        // SELECT * FROM donors WHERE donor_id = /* id */;
        const foundUser = await Donor.findOne({ where: { donor_id: id } });
        if (foundUser) {
            res.status(200).json({ Donor: foundUser });
        } else {
            res.status(404).json({ msg: "No Donor found with the given ID" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error on retrieving the Donor" });
    }
};



const signIn = async (req, res) => {
    const donorData = req.body;
    const { email_address, password } = donorData;

    try {
        if (!email_address || !password) {
            return res.status(400).json({ msg: "Email address and password are required" });
        }
//SELECT * FROM donors WHERE email_address = /* email_address */;

        const foundDonor = await Donor.findOne({ where: { email_address: email_address } });

        if (foundDonor) {
            if (donorData.password === foundDonor.password) {
                const token = jwt.sign(
                { donor_id: foundDonor.donor_id, role: foundDonor.role }, ///payload
                process.env.JWT_SECRET
                );
                // Generation of the token
                res.status(200).json({ donor: foundDonor, token: token });
            } else {
                res.status(410).json({ msg: "Wrong password" });
            }
        } else {
            return res.status(400).json({ msg: "Donor not registered"  });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};

module.exports = {signIn , postDonor ,  getDonors , putDonor , deleteDonor , getOneUser};