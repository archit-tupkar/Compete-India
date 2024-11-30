const logout = (req, res, next) => {
  try {
    res
      .clearCookie("jwt", {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .json({ message: "Logged Out successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = logout;
