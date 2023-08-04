const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
	origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
	extended: true
}));

// simple test route
app.get("/", (req, res) => {
	res.json({
		message: "Varonis Take Home Assignment"
	});
});

require("./app/routes/cpu.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});