const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
// 제출시 /dev/stdin
const a = input;

console.log(a[0] + a[1]);
