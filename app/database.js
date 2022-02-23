//const dotenv = require('dotenv');
const { Client } = require('pg');
//const pool = new Pool(process.env.PG_URL);
const pool = new Client(process.env.PG_URL)

pool.connect();

module.exports = pool;