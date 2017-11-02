class TodoListStore {
    constructor(DBConnection) {
        this.DBConnection = DBConnection;
    }

    createTodo(todo) {
        let query = 'INSERT INTO todo_list SET ?';
        return new Promise((resolve, reject) => {
            this.DBConnection.query(query, [todo], (err, result) => {
                // if(err) {
                //     console.log(1);
                // } else {
                //     console.log(2);
                // }
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
        let query = 'UPDATE todo_list set element= ? where id= ?';
        return new Promise((resolve, reject) => {
            this.DBConnection.query(query, [todo.element, todo.id], (err, result) => {
                err ? reject(err) : resolve(result);
                // if(err) {
                //     console.log(1);
                // } else {
                //     console.log(2);
                // }
            })
        })
    }

    getTodo() {
        let query = 'SELECT * FROM todo_list';
        return new Promise((resolve, reject) => {
            this.DBConnection.query(query, (err, results) => {
                // if(err) {
                //     console.log(1);
                // } else {
                //     console.log(2);
                // }
                err ? reject(err) : resolve(results);
            })
        })
    }

}

module.exports = TodoListStore;