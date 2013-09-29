
var express = require('express');


var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
    res.sendfile('public/index.html');
});

var port = 8010;
app.listen(port);
console.log('Express app started on port '+port);
