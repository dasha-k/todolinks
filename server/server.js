const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api.js')

const app = express();

/**
 * handle parsing request body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * define route handlers
 */
app.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
    // statically serve everything in the build folder on the route '/build'
    app.use('/build', express.static(path.join(__dirname, '../build')));
    // serve index.html on the route '/'
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../index.html'));
    });
}

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
  
app.listen(3000); //listens on port 3000 -> http://localhost:3000/