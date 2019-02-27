require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.SERVER_PORT || null;

const app = express();

app.use(bodyParser.json());

app.use('/', require('./routes'));

app.listen(PORT, () => console.log("Server is listening on port %s", PORT));

module.exports = app;