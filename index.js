const express = require('express');
// Constants
const port = 8000;
const path = require('path');

// App
const app = express();

app.use(express.static(path.join(__dirname,'laddawan')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'laddawan','index.html'));
});

app.listen(port,() =>
console.log('app on port'+port));
