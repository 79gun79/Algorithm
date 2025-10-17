const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);

let [a, x] = input;

a %= 1000000007n;
let res = 1n;
while (x > 0n) {
  if ((x & 1n) === 1n) {
    res = (res * a) % 1000000007n;
  }
  a = (a * a) % 1000000007n;
  x /= 2n;
}

console.log(Number(res));
