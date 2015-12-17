'use strict';

var express = require('express');

var todo = require('./../models/todo');

var apiRouter = express.Router();

apiRouter.get('/todos', function (req, res) {
	todo.find({}, function (err, todos) {
		if (err) {
			res.status(500).json({ message: err.message });
			return;
		}
		res.json({ todos: todos });
	});
});

// TODO: Add POST Route to create new entries

// TODO: Add PUT Route to update existing entries

// TODO: Add DELETE Route to remove existing entries

module.exports = apiRouter;