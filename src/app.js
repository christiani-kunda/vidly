const express = require('express');
const Joi = require('joi');
const app = express();

const movies = [{
        id: 1,
        name: 'movie1',
        genre: 'adventure'
    },
    {
        id: 2,
        name: 'movie2',
        genre: 'adventure'
    },
    {
        id: 3,
        name: 'movie3',
        genre: 'adventure'
    },
    {
        id: 4,
        name: 'movie4',
        genre: 'adventure'
    }
];

/** The welcoming api root */
app.get('/', (req, res) => {
    res.send('Welcome to vidly application');
});

/** The api that returns all movies */
app.get('/api/movies', (req, res) => {
    res.send(movies);
});

/* The api that returns movie given an id */
app.get('/api/movies/:id', (req, res) => {
    let movie = movies.find( aMovie => aMovie.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send(`The movie with id ${id} cannot be found!`);
    res.send(movie);
});

/* The api to create a new movie */
/* The api to update a movie */
/* The api to delete a movie */
app.delete('/api/movies/:id', (req, res) => {
    let movie = movies.find( aMovie => aMovie.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send(`The movie with id ${id} cannot be found!`);
    res.send(movie);
});


function validateMovie(movie){
    const schema = {
        name: Joi.string().min(3).required(),
        genre: Joi.string().min(4).required()
    };

    return Joi.validate(movie, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));