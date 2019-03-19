const express = require('express');
const sslRedirect = require('heroku-ssl-redirect');
const history = require('connect-history-api-fallback');
const path = require('path');
const serveStatic = require('serve-static');

// create the express app
const app = express();

// enable ssl redirect
app.use(sslRedirect());

// create middleware to handle the serving the app
app.use(history());  
app.use(serveStatic(path.join(__dirname, 'public')));

// Create default port to serve the app on
const port = process.env.PORT || 5000;
app.listen(port);

// Log a feedback that this is actually running
console.log('Server started on port ' + port);