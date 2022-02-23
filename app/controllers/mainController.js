const dataMapper = require("../dataMapper");

const mainController = {
	homePage: (req, res) => {
		dataMapper.getMembers((err, result) => {
			if (err) {
				console.error("ERREUR get", err.message);
				return;
			}
			res.status(200).send(result.rows)
		})
	},
	/*
	detailPage: (req, res) => {
		const id = req.params.id;
		dataMapper.getOneMember(id, (err, result) => {
			if (err) {
				console.error("ERREUR", err.message);
				return;
			}
			res.status(200).send(result.rows)
		})
	},*/
	createNewMember: (req, res) => {
		const { name, email } = req.body;
		console.log(req.body)
		dataMapper.createMember(name, email, (err, result) => {
			if (err) {
				console.error("ERREUR create", err.message);
				return;
			}
			res.status(200).send(result.rows);
		})
	},
	deleteOneMember: (req, res) => {
		const id = req.params.id;
		dataMapper.deleteMember(id, (err, result) => {
			if (err) {
				console.error(err.message);
				res.status(500).json(error.message);
				return;
			}
			res.status(200).send("Le membre a bien été supprimé.");
		})
	},
	updateOneMember: (req, res) => {
		const id = req.params.id
		const { name, email } = req.body;
		console.log(id, name, email)
		dataMapper.updateMember(name, email, id, (err, result) => {
			if (err) {
				console.error(err.message);
				res.status(500).json(error.message);
				return;
			}
			res.status(200).send("Le membre a bien été mis à jour.");
		})
	},
}

module.exports = mainController;