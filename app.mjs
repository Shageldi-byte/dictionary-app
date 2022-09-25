import express from "express";
import rateLimit from "express-rate-limit";
import router from "./routes/router.mjs";
import { BLACK_LIST } from "./modules/constant.mjs";
import { badRequest } from "./modules/response.mjs";

const app=express();
const PORT = 12345;

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message:'Gaty kan yuzlendiniz',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use(limiter)

app.use((req,res,next)=>{
    if(BLACK_LIST.indexOf(req.ip)!=-1){
        res.send("You are blocked");
    } else {
        next();
    }
    
})


// Raw json data convertor
app.use(express.json({extended:true}));

// Form-data converter function
app.use(express.urlencoded({ extended:true }));

app.use('/api',router);


app.listen(PORT,()=>console.log('listening on port '+PORT));