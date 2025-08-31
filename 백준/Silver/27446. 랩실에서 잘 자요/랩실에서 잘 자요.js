const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [num, p] = input;
const [n, m] = num;
const pg = [...new Array(n)].map((_, i) => i + 1);
const need = pg.filter((x) => !p.includes(x));

let res = 0;
for (let i = 0; i < need.length; i++) {
  if (i === 0) res += 7;
  else res += Math.min(7, 2 * (need[i] - need[i - 1]));
}

console.log(res);
