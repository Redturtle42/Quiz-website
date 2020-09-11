exports.up = function (knex) {
    return knex.schema.createTable('user_answers', table => {
        table.increments().primary();
        table.integer('correct').unsigned().notNull();
        table.integer('answers_id').unsigned();
        table.foreign('answers_id').references('answers.id');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('user_answers');
};
