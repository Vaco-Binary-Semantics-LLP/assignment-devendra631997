var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 8080;
var db = 'mongodb://localhost/example';

var books = require('./routes/team');
var cors = require("cors");
app.use(cors());
mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/team', books);

app.get('/', function(req, res){
    console.log('app starting on port: '+port)
    res.send('This is server');
});

app.listen(port, function(){
    console.log('app listening on port: '+port);
});