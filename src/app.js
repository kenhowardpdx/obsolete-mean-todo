'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public'));

app.use('/api', require(__dirname + '/api'));

app.listen(3000, function() {
	console.log('The frontend server is running on port 3000!');
});