var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.resolve(__dirname, './')));

var routes = require('./routes');
routes(app);

var port = 3000;
var hostname = '127.0.0.1';
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});