const express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  app = express(),
  port = 3001;

app.use(bodyParser.json());
// Serve the static files from the React app
app.use(express.static('dist'));

app.get(['/soccer-club', '/soccer-club/*'], (req, res) =>
  res.sendFile(path.join(__dirname, 'dist', 'soccer-club', 'index.html'))
);

const listener = app.listen(port, 'localhost', function() {
  console.log('Listening on port ' + listener.address().port);
});
