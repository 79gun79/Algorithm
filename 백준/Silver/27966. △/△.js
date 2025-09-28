let n = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");
n = Number(n);

console.log((n - 1) ** 2);
for (let i = 2; i < n + 1; i++) {
  console.log(1, i);
}
