'use strict';

var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
	name: String,
	completed: Boolean
});

var todoModel = mongoose.model('ToDo', todoSchema);

module.exports = todoModel;