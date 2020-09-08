exports.up = function (knex) {
    return knex.schema.createTable('possible_answers', table => {
        table.increments().primary();
        table.string('text', 1000).notNull();
        table.boolean('is_correct');
        table.integer('question_id').unsigned();
        table.foreign('question_id').references('questions.id');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('possible_answers');
};
