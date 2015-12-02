'use strict';

var express = require('express');

var apiRouter = express.Router();

apiRouter.get('/todos', function (req, res) {
	res.json({ todos: [] });
});

// TODO: Add POST Route to create new entries

// TODO: Add PUT Route to update existing entries

// TODO: Add DELETE Route to remove existing entries

module.exports = apiRouter;