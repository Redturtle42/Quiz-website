exports.up = function (knex) {
    return knex.schema.createTable('user_answers', table => {
        table.increments().primary();
        table.boolean('is_correct');
        table.integer('possible_answer_id').unsigned();
        table.foreign('possible_answer_id').references('possible_answers.id');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('user_answers');
};
