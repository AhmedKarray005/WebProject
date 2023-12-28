const express = require("express");
const NpoRoute = express.Router();
const {
    signIn , postNPO ,  getNPOs , deleteNPOS , getOneNPO
} = require("../Controllers/NpoController");

const isAuth = require("../middleware/isAuth")
const isAutho=require('../middleware/isAutho')
NpoRoute.get("/Npo",getNPOs );
NpoRoute.post("/Npo", postNPO);
NpoRoute.delete("/Npo/:id",isAuth,isAutho(['admin']), deleteNPOS);
NpoRoute.get("/Profile", isAuth,isAutho(['user']), getOneNPO);

NpoRoute.post("/sign", signIn);

module.exports = NpoRoute;
