module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: "funcionario",
            user: "postgres",
            password: "1234" //Server
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