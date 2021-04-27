module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: "test",
            user: "postgres",
            password: "" //Server
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/src/database/migrations`
        },
        seeds: {
            directory: `${__dirname}/src/database/seeds`
        }
    }
};