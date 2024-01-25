const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
// Import helper functions
const {readFromFile, writeToFile, readAndAppend} = require('../helpers/utils');

// GET route to get all notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route add a note
notes.post('/', (req, res) => {
  // Destructure req.body
  const {title, text} = req.body;
  // Create a new note if there is a req.body
  if (req.body) {
    const newNote = {
      title,
      text,
      noteID: uuidv4()
    };
    // Add new note 
    readAndAppend(newNote, './db/db.json');
    // Respond to request
    const response = {
      status: 'success',
      body: newNote
    };

    res.json(response);
  } else {
    res.json('Error in adding note');
  }
});

module.exports = notes;