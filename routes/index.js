const express          = require('express');
const router           = express.Router();
let TodoListController = require('../app/Http/Controllers/todo-list-controller');

router.get('/', TodoListController.getTodo);
router.post('/add-todo', TodoListController.createTodo);
router.put('/edit', TodoListController.updateTodo);
router.delete('/delete-todo/:id', TodoListController.deleteTodo);

module.exports = router;
