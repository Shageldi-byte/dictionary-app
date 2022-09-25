import express from "express";
import { words } from "../../modules/constant.mjs";
import { successMessage } from "../../modules/message.mjs";
import { response } from "../../modules/response.mjs";

const getAllWords=express.Router();


getAllWords.get('/',(req, res) => {
    res.json(response(false,successMessage(),words));
    res.end();
})

export default getAllWords;