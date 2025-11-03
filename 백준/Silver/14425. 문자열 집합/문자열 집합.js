const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [num, ...str] = input;
const [n, m] = num.split(" ").map(Number);

const s = new Set(str.splice(0, n));
let res = 0;
for (const v of str) {
  if (s.has(v)) res += 1;
}
console.log(res);
