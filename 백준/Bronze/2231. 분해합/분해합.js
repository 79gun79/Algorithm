const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim();

const n = Number(input);
let res = n;

for (let i = 1; i <= n; i++) {
  let sum = i;
  sum += i
    .toString()
    .split("")
    .map((v) => Number(v))
    .reduce((acc, cur) => acc + cur, 0);
  if (sum === n) {
    res = i;
    break;
  }
}

console.log(res === n ? 0 : res);
