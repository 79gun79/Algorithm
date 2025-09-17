const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, price, ...kcal] = input;
const [a, b] = price.split(" ").map(Number);
const [c, ...d] = kcal.map(Number);
d.sort((a, b) => a - b);

let pr = a + b * Number(n);
let kc = c + d.reduce((acc, cur) => acc + cur, 0);

let res = parseInt(kc / pr);
for (const v of d) {
  pr -= b;
  kc -= v;
  res = Math.max(res, parseInt(kc / pr));
}
console.log(res);
