import authRouter from "./auth/auth.mjs";
import express from "express";
import getAllWords from "./word/get-all-words.mjs";
import searchWord from "./word/search-word.mjs";

const router = express.Router();

router.use('/auth',authRouter);
router.use('/get-all-words',getAllWords)
router.use('/search-word',searchWord);

export default router;