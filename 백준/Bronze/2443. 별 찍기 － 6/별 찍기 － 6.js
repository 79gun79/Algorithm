const n = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const res = [];
for (let i = 0; i < n; i++) {
  res.push(" ".repeat(i) + "*".repeat(2 * (n - i) - 1));
}
console.log(res.join("\n"));
