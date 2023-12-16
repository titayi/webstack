const express = require('express');
const cors = require('cors');
const { dbase } = require('./dbase/base');
const { readdirSync } = require('fs');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());

// routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    dbase()
    app.listen(PORT, () => {
        console.log('You are listening to port:', PORT);
    })
}

server();