const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input);

for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(i - 1) + "*".repeat(2 * (n - i + 1) - 1));
}

for (let j = n + 1; j <= 2 * n - 1; j++) {
  console.log(" ".repeat(2 * n - 1 - j) + "*".repeat((j - n) * 2 + 1));
}
