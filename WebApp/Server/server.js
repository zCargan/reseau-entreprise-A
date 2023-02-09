const cors = require("cors");
const express = require("express");

const app = express();

const usersRoute = require("./routes/user");
const formationsRoute = require("./routes/formation");
const themesRoute = require("./routes/theme");
const filesRoute = require("./routes/file");

app.use(express.json());

// app.use(cors({ origin: "http://localhost:5173/", credentials: true }));
app.use(cors());
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Authorization"
	);
	res.setHeader(
		"Access-Control-Allow-Method",
		"POST, GET, PUT, DELETE, OPTIONS, PATCH"
	);
	next();
});
// display files from uploads folder
app.use("/uploads", express.static("uploads"));

//utiliser le router nodejs
app.use("/users", usersRoute);
app.use("/formations", formationsRoute);
app.use("/themes", themesRoute);
app.use("/files", filesRoute);

app.listen(5000, () => {
	console.log("server running on port 5000");
});

module.exports = app;
