process.env["NODE_CONFIG_DIR"] = "../config/";
const config =  require('config');
const mongoose =  require('mongoose');

/* Connecting to the database */
mongoose.connect(`${config.get('mongodb.host')}:${config.get('mongodb.port')}/${config.get('mongodb.name')}`, { useNewUrlParser: true })
        .then(() => console.log('connected to the database ...'))
        .catch((err) => console.log('connection to the database failed ',err));