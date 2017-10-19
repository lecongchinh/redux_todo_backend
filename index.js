require('dotenv').config();

const express = require('express');
const route = require('./routes');
const path = require('path');
const app = express();

//set static path
app.use(express.static(path.join(__dirname, 'public')));

app.use(route);

app.listen((process.env.PORT), () => {
    console.log('Listen at port: ' + `${process.env.PORT}`);
});