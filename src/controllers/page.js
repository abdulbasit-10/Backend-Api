import Book from '../models/book.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';

export const listBooks = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, q = '' } = req.query;
  const filter = q ? { title: new RegExp(q, 'i') } : {};
  const docs = await Book.find(filter)
    .skip((Number(page) - 1) * Number(limit))
    .limit(Number(limit))
    .sort({ createdAt: -1 });
  res.json(docs);
});

export const createBook = asyncHandler(async (req, res) => {
  const { title, author, price = 0 } = req.body;
  if (!title || !author) throw new ApiError(400, 'title and author are required');
  const doc = await Book.create({ title, author, price, owner: req.user.id });
  res.status(201).json(doc);
});
