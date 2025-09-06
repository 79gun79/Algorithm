const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input);

for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "* ".repeat(i));
}
