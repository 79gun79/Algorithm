const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

input.sort((a, b) => a - b);

const res1 = input.splice(1, 2).reduce((acc, cur) => acc + cur, 0);
const res2 = input.reduce((acc, cur) => acc + cur, 0);

console.log(Math.abs(res1 - res2));
