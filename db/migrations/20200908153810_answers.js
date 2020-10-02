exports.up = function (knex) {
    return knex.schema.createTable('quiz', table => {
        table.increments('_id').primary();
        table.string('question', 255).notNull();
        table.json('answer', 500).notNull();
        table.integer('is_correct').unsigned().notNull();
        table.integer('category_id').unsigned();
        table.foreign('category_id').references('categories._id');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('quiz');
};
