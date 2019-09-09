const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

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
    if(!movie) return res.status(404).send(`The movie with id ${req.params.id} cannot be found!`);
    res.send(movie);
});

/* The api to create a new movie */
app.post('/api/movies', (req, res) => {
    const { error } = validateMovie(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const movie = {
        id: movies.length + 1,
        name: req.body.name,
        genre: req.body.genre
    };
    movies.push(movie);
    res.send(movie);
});

/* The api to update a movie */
app.put('/api/movies/:id', (req, res) => {
    console.log(req.body);
    let movie = movies.find( aMovie => aMovie.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send(`The movie with id ${req.params.id} cannot be found!`);

   // let { error } = validateMovie(req.body);
  //  if(error) return res.status(400).send(error.details[0].message);

    movie.name = req.body.name;
    movie.genre = req.body.genre;
    res.send(movie);
});
/* The api to delete a movie */
app.delete('/api/movies/:id', (req, res) => {
    let movie = movies.find( aMovie => aMovie.id === parseInt(req.params.id));
    if(!movie) return res.status(404).send(`The movie with id ${req.params.id} cannot be found!`);
    movies.splice(movies.indexOf(movie),1);
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