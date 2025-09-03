const n = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(parseInt((BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6)));
console.log(3);
