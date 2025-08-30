const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim();

let n = BigInt(input);

console.log(`${n * n * n}`);
console.log(3);
