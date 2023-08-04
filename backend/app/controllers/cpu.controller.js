const CPU = require("../models/cpu.model.js");

// Create and Save a new CPU
exports.create = (req, res) => {
	// Validate request
	if (!req.body) {
		res.status(400).send({
			message: "Content can not be empty!"
		});
	}

	// Create a CPU
	const cpu = new CPU({
		manufacturer: req.body.manufacturer,
		model: req.body.model,
		coreCount: req.body.coreCount,
		clockSpeed: req.body.clockSpeed,
		price: req.body.price
	});

	// Save CPU in the database
	CPU.create(cpu, (err, data) => {
		if (err)
			res.status(500).send({
				message: err.message || "Some error occurred while creating the CPU."
			});
		else res.send(data);
	});
};

// Retrieve all CPU from the database.
exports.findAll = (req, res) => {
	CPU.getAll((err, data) => {
		if (err)
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving CPUs."
			});
		else res.send(data);
	});
};

// Find a single CPU with a id
exports.findOne = (req, res) => {
	CPU.findById(req.params.id, (err, data) => {
		if (err) {
			if (err.kind === "not_found") {
				res.status(404).send({
					message: `Not found CPU with id ${req.params.id}.`
				});
			} else {
				res.status(500).send({
					message: "Error retrieving CPU with id " + req.params.id
				});
			}
		} else res.send(data);
	});
};

// Update a CPU identified by the id in the request
exports.update = (req, res) => {
	// Validate Request
	if (!req.body) {
		res.status(400).send({
			message: "Content can not be empty!"
		});
	}

	console.log(req.body);

	CPU.updateById(
		req.params.id,
		new CPU(req.body),
		(err, data) => {
			if (err) {
				if (err.kind === "not_found") {
					res.status(404).send({
						message: `Not found CPU with id ${req.params.id}.`
					});
				} else {
					res.status(500).send({
						message: "Error updating CPU with id " + req.params.id
					});
				}
			} else res.send(data);
		}
	);
};

// Delete a CPU with the specified id in the request
exports.delete = (req, res) => {
	CPU.remove(req.params.id, (err, data) => {
		if (err) {
			if (err.kind === "not_found") {
				res.status(404).send({
					message: `Not found CPU with id ${req.params.id}.`
				});
			} else {
				res.status(500).send({
					message: "Could not delete CPU with id " + req.params.id
				});
			}
		} else res.send({
			message: `CPU was deleted successfully!`
		});
	});
};