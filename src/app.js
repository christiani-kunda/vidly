const Joi = require('joi');
const express = require('express');
const app = express();
const movies = require('./api/movies');
const home = require('./api/home');

app.use(express.json());
app.use('/api/movies',movies);
app.use('/',home);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));