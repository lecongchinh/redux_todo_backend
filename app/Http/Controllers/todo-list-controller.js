const DBConnection = require('../../../database/DBConnection');
const TodoListStore = require('../../todo-list-store');

let todoListStore = new TodoListStore(DBConnection);

function getTodo(req, res, next) {
    todoListStore.getTodo().then(results => {
       res.render('index.html', {results: 'results'});
    })
    .catch (next);
}

function createTodo(req, res, next) {
    todoListStore.createTodo(req.todo).then((todo) => {
        res.redirect('/');
    })
}

function updateTodo(req, res, next) {
    todoListStore.updateTodo(req.todo).then((todo) => {

    })
}

function deleteTodo(req, res, next) {
    todoListStore.deleteTodo(req.id).then((id) => {

    })
}

exports.getTodo = getTodo;
exports.createTodo = createTodo;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;
