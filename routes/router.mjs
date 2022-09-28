import addWord from "./word/add-word.mjs";
import authRouter from "./auth/auth.mjs";
import deleteWord from "./word/delete-word.mjs";
import express from "express";
import getAllWords from "./word/get-all-words.mjs";
import searchWord from "./word/search-word.mjs";

const router = express.Router();

router.use('/auth',authRouter);
router.use('/get-all-words',getAllWords)
router.use('/search-word',searchWord);
router.use('/add-word',addWord);
router.use('/delete-word',deleteWord);

export default router;