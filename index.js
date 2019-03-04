var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hola Mundo');
});

app.listen(8080, function () {
    console.log('It works on port 8080');
});