import express from "express";
import router from "./routes/router.mjs";

const app=express();
const PORT = 12345;

// Raw json data convertor
app.use(express.json({extended:true}));

// Form-data converter function
app.use(express.urlencoded({ extended:true }));

app.use('/api',router);


app.listen(PORT,()=>console.log('listening on port '+PORT));