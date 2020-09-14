exports.up = function (knex) {
    return knex.schema.createTable('user_answers', table => {
        table.increments().primary();
        table.integer('correct').unsigned().notNull();
        table.integer('quiz_id').unsigned();
        table.foreign('quiz_id').references('quiz.id');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('user_answers');
};
