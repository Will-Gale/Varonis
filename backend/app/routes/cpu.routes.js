module.exports = app => {
	const CPU = require("../controllers/cpu.controller.js");

	var router = require("express").Router();

	// Create a new CPU
	router.post("/", CPU.create);

	// Retrieve all CPU
	router.get("/", CPU.findAll);

	// Retrieve a single CPU with id
	router.get("/:id", CPU.findOne);

	// Update a CPU with id
	router.put("/:id", CPU.update);

	// Delete a CPU with id
	router.delete("/:id", CPU.delete);

	app.use('/api/cpu', router);
};