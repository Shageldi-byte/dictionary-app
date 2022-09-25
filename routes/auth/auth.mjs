import express from "express";
import { request } from "http";
import { type } from "os";
import { users } from "../../modules/constant.mjs";
import { successMessage } from "../../modules/message.mjs";
import { badRequest, response } from "../../modules/response.mjs";

const authRouter=express.Router();

authRouter.post('/sign-in',(req,res)=>{
    const {
        username,
        password
    } = req.body;

    // const username = req.body.username;
    // const password = req.body.password;


    if(typeof username === 'undefined' || username == null || username==''
        || typeof password === 'undefined' || password == null || password=='') {
            badRequest(req,res);
    } else {
        const foundUser = users.filter(item=>item.username === username && item.password === password);

        if(foundUser.length > 0) {
            res.json(response(false,successMessage(),foundUser[0]));
            res.end();
        } else {
            badRequest(req,res);
        }
    }

    
})


authRouter.get('/sign-in',(req,res)=>{
    res.send("THis is get method");
})

authRouter.get('/sign-in',(req,res)=>{
    res.send("THis is get method2");
})


export default authRouter;