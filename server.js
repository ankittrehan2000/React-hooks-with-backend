const express = require('express');
const dotenv = require('dotenv'); // creates global variables
const colors = require('colors'); // adds colors to the console
const morgan = require('morgan'); //logger
const connectDb = require('./config/db');
//configure dotenv first so that the global variables can be used
dotenv.config({ path: './config/config.env'});

connectDb();

const app = express();

app.use(express.json());

const calories = require('./routes/calories')

app.use('/backend/calories', calories);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))