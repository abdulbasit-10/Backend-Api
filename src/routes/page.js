import { Router } from 'express';
import {
  listBooks, getBook, createBook, updateBook, deleteBook
} from '../controllers/book.controller.js';
import { requireAuth } from '../middlewares/auth.js';

const router = Router();

router.get('/', listBooks);
router.get('/:id', getBook);
router.post('/', requireAuth, createBook);
router.patch('/:id', requireAuth, updateBook);
router.delete('/:id', requireAuth, deleteBook);

export default router;
