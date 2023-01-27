import express from "express";
import {getAllBooks, addNewBook} from "./controller.js";

const router = express.Router();

router.get("/books",getAllBooks);
router.post("/books", addNewBook)

router.get('/books/:id');

router.put('/books/:id');

router.delete('/books/:id');


export default router;