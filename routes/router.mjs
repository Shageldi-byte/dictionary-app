import authRouter from "./auth/auth.mjs";
import express from "express";

const router = express.Router();

router.use('/auth',authRouter);

export default router;