var port    = process.env['PORT'] || 4321
var express = require('express');
var app     = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.sendfile('public/index.html');
});

app.listen(port);
console.log("listening on "+port);
