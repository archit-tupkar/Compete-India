const createError = (statusCode, message) => {
  const e = new Error();
  e.statusCode = statusCode;
  e.message = message;
  return e;
};

module.exports = createError;
