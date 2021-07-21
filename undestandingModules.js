// sayHi("susan");
// sayHi(john);
// sayHi(peter);

const names = require('./Names');
const {sayHi} = require('./utils');
sayHi(names.john);
// console.log(names);