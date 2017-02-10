var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../client'));

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('listening on port', PORT);
