const greet = (user, course) => {
  return `Hello ${user}! Welcome to ${course}`;
};

const getInfo = (info) => {
  return `${info.fname} ${info.lname} lives in ${info.address.city}`;
};

const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};
const div = (a, b) => {
  return a / b;
};

const printFruits = (fruits) => {
  for (let fruit of fruits) {
    console.log(fruit);
  }
};

module.exports = { greet, getInfo, printFruits, add, sub, mul, div };
