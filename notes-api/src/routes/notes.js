

import express from 'express';
import Note from '../models/note.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.use(authenticate);

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const note = new Note({ title, content, userId: req.userId });
  await note.save();
  res.status(201).json(note);
});

router.get('/', async (req, res) => {
  const notes = await Note.find({ userId: req.userId });
  res.json(notes);
});

export default router;
