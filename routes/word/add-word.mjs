import express from "express";
import { words } from "../../modules/constant.mjs";
import { message, successMessage } from "../../modules/message.mjs";
import { badRequest, response } from "../../modules/response.mjs";

const addWord=express.Router();
const sayHello=(req,res,next)=>{
    console.log("Hello");
    next();
}
const requestChecker=(req,res,next)=>{
    console.log(JSON.stringify(req.body));
    next();
}

addWord.post('/',sayHello,requestChecker,(req, res) => {
    const {
        en,
        tm,
        pr,
        eg,
        userId
    } = req.body;

    let isExist=words.find(word => word.en===en);

    if(isExist){
        res.json(response(true,message('Bu soz eyyam bar','This word is alreade exist','Rusca'),null));
    } else {
        words.push({
            id:parseInt(Math.random()*1000),
            en:en,
            tm:tm,
            pr:pr,
            eg:eg,
            userId:userId
        });

        res.json(response(false,successMessage(),words[words.length - 1]));
    }

    
})

export default addWord;