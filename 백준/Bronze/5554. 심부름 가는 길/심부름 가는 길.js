const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [...s] = input;
const res = s.reduce((acc, cur) => acc + cur, 0);

console.log(parseInt(res / 60));
console.log(parseInt(res % 60));
