const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getTime();
  console.log(method, url, time);
  // res.send("Loading");
  next();
};

const greetUser = (req, res, next) => {
  console.log("Hello!");
  next();
};

module.exports = { logger, greetUser };
