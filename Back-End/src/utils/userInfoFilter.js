const userInfoFilter = (user) => {
  const { password, ...rest } = user._doc;
  console.log(rest);
  return rest;
};

module.exports = userInfoFilter;
