// ? Modules - Encapsulated code
// ? Node uses CommonJS, where every file is module (by default)

const { user, course, info, a, b, fruits } = require("./02_variables");

const {
  greet,
  getInfo,
  printFruits,
  add,
  sub,
  mul,
  div,
} = require("./03_functions");

console.log(greet(user, course));
console.log(getInfo(info));
console.log(printFruits(fruits));
console.log(add(a, b));
console.log(sub(a, b));
console.log(mul(a, b));
console.log(div(a, b));
