const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// para habilitar environment variables no arquivo .env
require('dotenv').config();

const app = express();

// busca porta do arquivo .env ou usa a 5000
const port = process.env.PORT || 5000;

// middleware setting
app.use(cors());
app.use(express.json()); //allow to parse json

// mogoDB database connection
const uri = process.env.DATABASE_URL;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connDB = mongoose.connection;
connDB.on('error', error => console.log(`Mongoose connection error: ${error}`));
connDB.once('open', () => console.log(`Connected to Mongoose: ${uri}`));

// require routes files
const usersRouter = require('./api/routes/users.route');
app.use('/users', usersRouter);

// run the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`); 
});