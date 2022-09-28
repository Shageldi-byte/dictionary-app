import express from "express";
import { words } from "../../modules/constant.mjs";
import { badRequest } from "../../modules/response.mjs";
import { valueChecker } from "../../modules/utils.mjs";

const deleteWord=express.Router();

deleteWord.delete('/:id',(req, res) => {
    let word_id = req.params.id;
    let user_id = req.query.user_id;

    let word = words.filter(item=>item.id == word_id)[0];

    if(!valueChecker(word)){
        if(word.userId==user_id){
            // pozmaly
            let temp=words.filter(item=>item.id != word_id);
            res.json(temp);
        } else {
            res.send("You can not delete this word");
        }
    } else {
        badRequest(req,res);
    }



    
})

export default deleteWord;