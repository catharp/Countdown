var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../client'));
app.use('/node_modules', express.static(__dirname + '/../node_modules'));

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('listening on port', PORT);
