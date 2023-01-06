const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Pratik@09",
    database: "postgres"
})

module.exports = client