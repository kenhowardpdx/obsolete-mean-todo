'use strict';

var todo = require('./models/todo');

var todos = [
	'Feed Dog',
	'Walk Dog',
	'Pet Dog'
];

todos.forEach(function(t, index) {
	todo.find({ 'name': t }, function (err, todos) {
		if (!err && !todos.length) {
			todo.create({ completed: false, name: t });
		}
	});
});