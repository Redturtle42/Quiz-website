exports.up = function (knex) {
    return knex.schema.createTable('stat', table => {
        table.increments('_id').primary();
        table.string('type_name', 255).notNull();
        table.integer('number_of_question').unsigned().notNull();
        table.integer('number_of_correct').unsigned().notNull();
        table.integer('percentage').notNull();
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('stat');
};
