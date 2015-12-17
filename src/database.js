'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(err) {
	if (err) {
		return console.log("Failed connecting to mongo!");
	} else {
		return console.log("Successfully connected to mongo!");
	}
});

require('./seed');