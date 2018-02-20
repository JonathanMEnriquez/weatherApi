var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'weatherApp', 'dist')));

// app.get('/', function(req, res) {
//     res.send('hola');
// })

app.all('*', (req, res, next)=> {
    res.sendFile(path.resolve('./weatherApp/dist/index.html'));
})

app.listen(8000, function() {
    console.log('listening on port 8000');
})