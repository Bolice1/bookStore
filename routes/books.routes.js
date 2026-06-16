import { Router } from "express";
import { deleteAbook, updateAsingleBook, addNewBook, getAbookById, getAllBooks } from "../controllers/books.controller.js";

const router = Router();

router.post('/', addNewBook)
router.get('/', getAllBooks)
router.get('/:id', getAbookById)

router.put('/:id', updateAsingleBook)
router.delete('/:id', deleteAbook)


export default router;