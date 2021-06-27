'use strict';
//common-js require
// es6 - import
const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
// to add any middleware we use the 'use' keyward
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/bad', (req, res) => {
  throw new Error('Something went wrong');
});
app.use('*', notFoundHandler); // this have to be after all the routes //any other link
app.use(errorHandler); // this have to be the last line befoure the export ,, if there is something wrong
function start(port) {
  app.listen(port, () => console.log(`Server is up on ${port}`));
}
module.exports = {
  app: app,
  start: start,
};
