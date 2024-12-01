const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const createError = require("../utils/errorHandler");

const authMiddleware = (req, res, next) => {
  // token
  const token = req.cookies.jwt;
  if (!token) return next(createError(403, "Unauthorized user"));
  // verify token
  try {
    const decoded = jwt.verify(token, process.env.REFRESH_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authMiddleware;
