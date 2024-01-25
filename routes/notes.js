const notes = require('express').Router();
const {readFromFile, writeToFile, readAndAppend} = require('../helpers/utils');

// GET route to get all notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = notes;