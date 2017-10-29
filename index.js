require('dotenv').config();

const express = require('express');
const route = require('./routes');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

//set static path
app.use(express.static(path.join(__dirname, 'public')));

//body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.use(route);

app.listen((process.env.PORT), () => {
    console.log('Port: ' + `${process.env.PORT}`);
});