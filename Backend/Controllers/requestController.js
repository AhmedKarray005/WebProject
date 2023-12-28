const Request = require("../models/Request");

// Get all requests
const getRequests = async (req, res) => {
    try {
        const requests = await Request.findAll();
        res.status(200).json({ Requests: requests });
    } catch (error) {
        res.status(500).json({ msg: "Error on getting requests", error: error.message });
    }
};

// Get one request
const getOneRequest = async (req, res) => {
    const id = req.params.id;
    try {
        const foundRequest = await Request.findByPk(id);
        if (foundRequest) {
            res.status(200).json({ Request: foundRequest });
        } else {
            res.status(404).json({ msg: "Request not found" });
        }
    } catch (error) {
        console.error("Error on getting one request:", error);
        res.status(500).json({ msg: "Error on getting one request", error: error.message });
    }
};

// Post one request
const postRequest = async (request, response) => {
    try {
        const newRequest = request.body;
        const createdRequest = await Request.create(newRequest);
        response.status(200).json({ Request: createdRequest, msg: "Request added successfully" });
    } catch (error) {
        console.error("Error on adding request:", error);
        response.status(500).json({ msg: "Error on adding request", error: error.message });
    }
};



module.exports = { postRequest, getRequests, getOneRequest };
