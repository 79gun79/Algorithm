const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [n, a, b] = input;
a.sort((a, b) => a - b);
b.sort((a, b) => b - a);

let res = 0;
for (let i = 0; i < n; i++) {
  res += a[i] * b[i];
}
console.log(res);
