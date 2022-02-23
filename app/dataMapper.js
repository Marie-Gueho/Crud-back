const pool = require('./database');

exports.getMembers = (callback) => {
	pool.query(`SELECT * from "members" ORDER BY name ASC`, callback);
}
/*
exports.getOneMember = (id, callback) => {
	pool.query(`SELECT * FROM "members" WHERE "id" = $1`, [id], callback);
}*/

exports.createMember = (name, email, callback) => {
	pool.query(`INSERT INTO members (name, email) VALUES ($1, $2) RETURNING *`, [name, email], callback);
}

exports.deleteMember = (id, callback) => {
	pool.query(`DELETE FROM members WHERE "id" = $1`, [id], callback);
}

exports.updateMember = (name, email, id, callback) => {
	pool.query(`UPDATE members SET name = $1,email = $2 WHERE "id" = $3`, [name, email, id], callback);
}