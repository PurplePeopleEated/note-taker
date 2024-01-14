const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('/public'));

// HTML Routes
app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));