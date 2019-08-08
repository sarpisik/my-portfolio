const express = require('express');
const app = express();
const port = 3001;

// Serve the static files from the React app
app.use(express.static('dist'));

app.get(['/soccer-club', '/soccer-club/*'], (req, res) =>
  res.sendFile(path.join(__dirname, 'dist', 'soccer-club', 'index.html'))
);

const listener = app.listen(port, 'localhost', function() {
  console.log('Listening on port ' + listener.address().port);
});
