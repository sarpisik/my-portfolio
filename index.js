const express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
  app = express(),
  log = require('./logger'),
  port = 3001;

app.use(bodyParser.json());

//request,response logger middleware
app.use(function(req, res, next) {
  const send = res.send;

  res.send = function(data) {
    log.info('Response:' + data + '\n\n');
    send.call(this, data);
  };
  log.info('function: ' + req.url);
  log.info('Request' + JSON.stringify(req.body));
  next();
});

// Serve the static files from the React app
app.use(express.static('dist'));

app.get(['/soccer-club', '/soccer-club/*'], (req, res) =>
  res.sendFile(path.join(__dirname, 'dist', 'soccer-club', 'index.html'))
);

// General Error Logger in logger file.
app.use((err, req, res, next) => {
  if (err) {
    log.error('General Error:');
    log.error(err.stack);
  }
  res.json({ message: 'Global Error Occurred' });
  next();
});

const listener = app.listen(port, 'localhost', function() {
  log.info('Listening on port ' + listener.address().port);
});
