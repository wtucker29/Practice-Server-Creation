const express = require('express');
const path = require('path');
// const db = require('./db');

const morgan = require('morgan');
const cors = require('cors');

const app = express();
module.exports.app = app;

const PORT = 3000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// app.use('/test', router);

// app.use(express.static(path.join(__dirname, 'client')));

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});