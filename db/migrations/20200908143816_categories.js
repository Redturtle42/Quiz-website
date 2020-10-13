exports.up = function (knex) {
    return knex.schema.createTable('categories', (table) => {
        table.increments('_id').primary();
        table.string('type', 50).notNull();
        table.string('description', 500);
        table.string('image_src').notNull();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('categories');
};

