import express from "express";
import { words } from "../../modules/constant.mjs";
import { successMessage } from "../../modules/message.mjs";
import { response } from "../../modules/response.mjs";

const searchWord=express.Router();

searchWord.get('/',(req,res)=>{
    let queryWord=req.query.q.toUpperCase();
    let filteredArray=words.filter(item=>item.en.toUpperCase().includes(queryWord) || item.tm.toUpperCase().includes(queryWord));
    res.json(response(false,successMessage(),filteredArray));
})

export default searchWord;