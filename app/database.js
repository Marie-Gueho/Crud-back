const { Client } = require('pg');

const pool = new Client(process.env.PG_URL)

pool.connect();

module.exports = pool;
