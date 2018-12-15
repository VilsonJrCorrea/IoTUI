const express = require('express')
var app = express();
var engines = require('consolidate');
const path = require('path')
const PORT = process.env.PORT || 5000
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.listen(PORT, function () {
    console.log("Ouvindo na porta " + PORT);
});

