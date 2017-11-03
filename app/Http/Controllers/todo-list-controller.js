const DBConnection  = require('../../../database/DBConnection');
const TodoListStore = require('../../todo-list-store');

let todoListStore = new TodoListStore(DBConnection);

function getTodo(req, res, next) {
    todoListStore.getTodo().then(results => {
       res.json(results);
    })
    .catch (next);
}

function createTodo(req, res, next) {
    todoListStore.createTodo(req.body).then((todo) => {
        console.log(todo);
    })
        .catch(next);
}

function updateTodo(req, res, next) {
    // console.log(req.body);
    todoListStore.updateTodo(req.body).then((todo) => {
        console.log(todo);
    })
        .catch(next);
}

function deleteTodo(req, res, next) {
    todoListStore.deleteTodo(req.params.id).then(() => {
        res.json(req.params.id);
    })
    .catch(next);
}

exports.getTodo    = getTodo;
exports.createTodo = createTodo;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;
