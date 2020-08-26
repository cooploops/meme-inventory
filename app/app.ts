// lib/app.ts
import express = require('express');
import bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001
// look at installing CORS package to handle cross-origin requests

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log('Example app listening on port 3001!');
});