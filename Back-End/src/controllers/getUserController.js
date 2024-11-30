const User = require("../models/user");
const userInfoFilter = require("../utils/userInfoFilter");
const getUsers = async (req, res, next) => {
  const userId = req.userId;
  try {
    const response = await User.findById(userId);
    res.send(userInfoFilter(response));
  } catch (error) {
    next(error);
  }
};

module.exports = getUsers;
