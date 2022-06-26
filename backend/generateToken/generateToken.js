const jwt = require("jsonwebtoken");

// Generate-jwt-Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "40d",
  });
};

module.exports = {
  generateToken,
};
