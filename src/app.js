const express = require('express');
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

app.get('/', (req, res) => {
    res.send('Welcome to vidly application');
});

app.get('/movies', (req, res) => {
    res.send(movies);
});

app.listen(3000, () => console.log('Listening on port 3000 ...'));