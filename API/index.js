const express = require('express')
const app = express();
const router = express.Router();

const config = require('./config/database');//connects to database port
const path = require('path');
const searchresults = require('./routes/searchresults')(router);
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(
    
    config.uri,

    { useMongoClient: true },
    
    (err) => {
    
        if (err) { 
        
            console.log("couldn't talk to the database");
        
        } else { 

            console.log(config.secret); //displays encryption
            console.log('talking to the database:' + config.db);

        }
    }
)

//gets the website of origin (which is the front end client)
app.use(cors({
    origin: 'http://localhost8080'
}))

//middleware (this needs to be used before the routes)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//creates a static directory of search results(aka from the router)
app.use('/searchresults', searchresults)

app.listen(8000, () => {
    console.log('And we are listening on port 8000')
  });

