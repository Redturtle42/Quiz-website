exports.up = function (knex) {
    return knex.schema.createTable('answers', table => {
        table.increments().primary();
        table.string('question', 255).notNull();
        table.json('answer', 500).notNull();
        table.integer('is_correct').unsigned().notNull();
        table.integer('category_id').unsigned();
        table.foreign('category_id').references('categories.id');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('answers');
};
