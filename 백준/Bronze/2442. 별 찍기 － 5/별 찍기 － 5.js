const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input);

for (let i = 1; i <= n; i++) {
  let tmp = " ".repeat(n - i) + "*".repeat(2 * i - 1);
  console.log(tmp);
}
