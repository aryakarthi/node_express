const os = require("node:os");

// To get os and user information
const data = {
  name: os.type(),
  os: os.platform(),
  release: os.release(),
  username: os.userInfo(),
  hostname: os.hostname(),
  arch: os.arch(),
  freemem: os.freemem(),
  totalmem: os.totalmem(),
};

console.log(data);
