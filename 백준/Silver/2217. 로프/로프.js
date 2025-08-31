const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [n, ...kg] = input;

kg.sort((a, b) => a - b);
const res = [];
for (let i = 0; i < n; i++) {
  res.push(kg[i] * (n - i));
}
res.sort((a, b) => b - a);
console.log(res[0]);
