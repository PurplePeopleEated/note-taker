const router = require('express').Router();

// Route Path
const notesRouter = require('./notes');

// http://localhost:3001/api/notes/*
router.use('/notes', notesRouter);

module.exports = router;