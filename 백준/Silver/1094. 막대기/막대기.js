const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim();

let x = Number(input);
const bar = [64, 32, 16, 8, 4, 2, 1];
let res = 0;

for (const v of bar) {
  if (x >= v) {
    x -= v;
    res += 1;
  }
}
console.log(res);
