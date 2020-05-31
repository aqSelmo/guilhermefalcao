const config = require('./config');
const express = require('express');
const consign = require('consign');

const app = express();

app.use(express.json());

consign()
    .include('./routes')
    .then('./controllers')
    .then('./config/db/index.js')
    .into(app);

app.listen(config.port, config.callback);