const jwt = require("jsonwebtoken");
require('dotenv').config();

const NPO = require("../models/NPO");


const postNPO = async (request, response) => {
    try {
        const newNPO = request.body;

        // Check if the donor with the given email already exists
        const foundNPO = await NPO.findOne({ where: { email_address: newNPO.email_address } });

        if (foundNPO) {
            response.status(400).json({ msg: "DNPO already exists" });
        } else {
            // Create a new donor instance
            const createdNPO = await NPO.create(newNPO);

            // Respond with the created donor and success message
            response.status(200).json({ Donor: createdNPO, msg: "NPO added successfully" });
        }
    } catch (error) {
        console.error("Error on adding NPO:", error);
        response.status(500).json({ msg: "Error on adding NPO", error: error.message });
    }
};




const getNPOs = async (req, res) => {
    try {
        const  NPOs = await NPO.findAll();
        console.log(NPOs);
        res.status(200).json({ NPOs: NPOs });
    } catch (error) {
        res.status(500).json({ msg: "Error on getting NPOs", error: error.message });
    }
};



const deleteNPOS = async (req, res) => {
    const id = req.params.id
    console.log(id);
  
    try {
      const deleteCount = await NPO.destroy({
        where: { id: id },
      });
  
      if (deleteCount > 0) {
        res.status(200).json({ msg: "npo deleted successfully" });
      } else {
        res.status(404).json({ msg: "NPO not found" });
      }
    } catch (error) {
      console.error("Error on deleting  NPO:", error);
      res.status(500).json({ msg: "Error on deleting NPO", error: error.message });
    }
  };
  


const getOneNPO = async (req, res) => {
        const id = req.user.id
    try {
        const foundNPO = await NPO.findByPk(id);
        if (foundNPO) {
            res.status(200).json({ NPO: foundNPO });
        } else {
            res.status(404).json({ msg: "No NPO found with the given ID" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error on retrieving the npo" });
    }
};


const signIn = async (req, res) => {
    const NPOData = req.body;
    const { email_address, password } = NPOData;

    try {
        if (!email_address || !password) {
            return res.status(400).json({ msg: "Email address and password are required" });
        }

        const foundNPO = await NPO.findOne({ where: { email_address: email_address } });

        if (foundNPO) {
            if (NPOData.password === foundNPO.password) {
                const token = jwt.sign(
                { id: foundNPO.id, role: foundNPO.role }, ///payload
                process.env.JWT_SECRET
                );
                // Generation of the token
                res.status(200).json({ NPO: foundNPO, token: token });
            } else {
                res.status(410).json({ msg: "Wrong password" });
            }
        } else {
            return res.status(400).json({ msg: "NPO not registered"  });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
};

module.exports = {signIn , postNPO ,  getNPOs ,  deleteNPOS , getOneNPO};