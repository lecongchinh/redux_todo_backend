class TodoListStore {
    constructor(DBConnection) {
        this.DBConnection = DBConnection;
    }

    createTodo(todo) {
        let query = 'INSERT INTO todo_list SET ?';
        return new Promise((resolve, reject) => {
            this.DBConnection.query(query, [todo], (err, result) => {
                (err) ? reject(err) : resolve(result);
            })
        })
    }

    deleteTodo(id) {
        let query = 'DELETE FROM todo_list WHERE id = ?';
        return new Promise((resolve, reject) => {
            this.DBConnection.query(query, [id], (err, result) => {
                err ? reject(err) : resolve(result);
            })
        })
    }

    updateTodo(todo) {
        let query = 'UPDATE todo_list set ?';
        return new Promise((resolve, reject) => {
            this.DBConnection.query(query, [todo], (err, result) => {
                err ? reject(err) : resolve(result);
            })
        })
    }

    getTodo() {
        let query = 'SELECT * FROM todo_list';
        return new Promise((resolve, reject) => {
            this.DBConnection.query(query, (err, results) => {
                err ? reject(err) : resolve(results);
            })
        })
    }

}

module.exports = TodoListStore;