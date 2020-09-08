exports.up = function (knex) {
    return knex.schema.createTable('categories', (table) => {
        table.increments().primary();
        table.string('title', 50).notNull();
        table.string('content', 500);
        table.string('image_src').notNull();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('categories');
};

