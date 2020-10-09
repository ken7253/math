const fibo = require('./function_module/fibonacci');
const coll = require('./function_module/collatz');

const result = coll.collatz(27);

console.log(result);
