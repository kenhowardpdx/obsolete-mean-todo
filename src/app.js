'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public'));

var apiRouter = express.Router();

app.use('/api', apiRouter);

apiRouter.get('/todos', function (req, res) {
	res.json({ todos: [] });
});

// TODO: Add POST Route to create new entries

// TODO: Add PUT Route to update existing entries

// TODO: Add DELETE Route to remove existing entries

app.listen(3000, function() {
	console.log('The frontend server is running on port 3000!');
});