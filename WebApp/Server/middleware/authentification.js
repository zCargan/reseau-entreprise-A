const jwt = require("jsonwentoken");
const admin = require("../firebase");

module.exports = async (req, res, next) => {
	try {
		const token = req.auth.authfirebase;
		admin
			.verifyIdToken(token)
			.then((decodedToken) => {
				next();
			})
			.catch((err) => {
				res.status(500).json({ error: "invalid token" });
			});
	} catch {
		res.status(500).json({ error: "invalid token" });
	}
};
