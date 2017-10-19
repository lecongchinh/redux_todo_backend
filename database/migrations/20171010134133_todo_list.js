
exports.up = function(knex, Promise) {
    return knex.schema.createTable('todo_list', (table) => {
        table.increments('id').primary();
        table.string('element', 1000);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('todo_list');
};
