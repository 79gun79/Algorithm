const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [[n, m], pg] = input;

const page = [...new Array(n)].map((_, i) => i + 1);
const prt = page.filter((v) => !pg.includes(v));

let res = 0;
for (let i = 0; i < prt.length; i++) {
  if (i === 0) res += 7;
  else res += Math.min(7, 2 * (prt[i] - prt[i - 1]));
}
console.log(res);
