exports.up = knex => {
    knex.schema.createTable('funcionario', table => {
        table.increments('id').primary();
        table.string('idade').notNullable();
        table.string('nome').notNullable();
        table.string('cargo').notNullable();
    })
}

exports.down = knex => {
    knex.schema.dropTable('funcionario')
};