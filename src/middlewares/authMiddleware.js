const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Access Denied. No Token Provided." });
  }

  try {
    // Bearer <token>
    const jwtToken = token.split(" ")[1];
    const verified = jwt.verify(jwtToken, process.env.JWT_SECRET);
    req.user = verified; // user data from token
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
