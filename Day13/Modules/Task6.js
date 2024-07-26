// Task 6: Install a third-party module (e.g., lodash ) using npm. Import and use a function from this module in a script.
const _ = require("lodash");
let arr = [1, 2, 3, 4, 5, 6];

console.log(_.chunk(arr, 1))