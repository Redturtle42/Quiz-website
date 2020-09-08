exports.up = function (knex) {
    return knex.schema.createTable('questions', table => {
        table.increments().primary();
        table.string('text', 1000).notNull();
        table.integer('category_id').unsigned();
        table.foreign('category_id').references('categories.id');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('questions');
};
