const sql = require("./db.js");

// constructor
const CPU = function(cpu) {
	this.manufacturer = cpu.manufacturer;
	this.model = cpu.model;
	this.coreCount = cpu.coreCount;
	this.clockSpeed = cpu.clockSpeed;
	this.price = cpu.price;
};

CPU.create = (newCPU, result) => {
	sql.query("INSERT INTO cpu SET ?", newCPU, (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}
		
		console.log("successfully created cpu: ", {
			id: res.insertId,
			...newCPU
		});
		result(null, {
			id: res.insertId,
			...newCPU
		});
	});
};

CPU.findById = (id, result) => {
	sql.query(`SELECT * FROM cpu WHERE id = ${id}`, (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(err, null);
			return;
		}

		if (res.length) {
			console.log("found cpu: ", res[0]);
			result(null, res[0]);
			return;
		}

		// can't find CPU
		result({
			kind: "not_found"
		}, null);
	});
};

CPU.getAll = (result) => {
	let query = "SELECT * FROM cpu";

	sql.query(query, (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(null, err);
			return;
		}

		console.log("cpu's: ", res);
		result(null, res);
	});
};

CPU.updateById = (id, cpu, result) => {
	sql.query(
		"UPDATE cpu SET manufacturer = ?, model = ?, coreCount = ?, clockSpeed = ?, price = ? WHERE id = ?",
		[cpu.manufacturer, cpu.model, cpu.coreCount, cpu.clockSpeed, cpu.price, id],
		(err, res) => {
			if (err) {
				console.log("error: ", err);
				result(null, err);
				return;
			}

			if (res.affectedRows == 0) {
				// not found CPU with the id
				result({
					kind: "not_found"
				}, null);
				return;
			}

			console.log("updated CPU: ", {
				id: id,
				...cpu
			});
			result(null, {
				id: id,
				...cpu
			});
		}
	);
};

CPU.remove = (id, result) => {
	sql.query("DELETE FROM cpu WHERE id = ?", id, (err, res) => {
		if (err) {
			console.log("error: ", err);
			result(null, err);
			return;
		}

		if (res.affectedRows == 0) {
			// not found CPU with the id
			result({
				kind: "not_found"
			}, null);
			return;
		}

		console.log("deleted CPU with id: ", id);
		result(null, res);
	});
};

module.exports = CPU;