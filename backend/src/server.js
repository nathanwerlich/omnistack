const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const server = express();

mongoose.connect('mongodb+srv://nathanwerlich:nathan123@cluster0-nrpfn.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(8080);
