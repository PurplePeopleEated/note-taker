const express = require('express');
const path = require('path');

// Import routes
const api = require('./routes/index.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

// HTML Routes
app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));