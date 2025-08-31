const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input);

for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i) + " ".repeat(2 * n - 2 * i) + "*".repeat(i));
}

for (let j = n + 1; j < 2 * n; j++) {
  console.log(
    "*".repeat(2 * n - j) +
      " ".repeat(2 * n - 2 * (2 * n - j)) +
      "*".repeat(2 * n - j)
  );
}
