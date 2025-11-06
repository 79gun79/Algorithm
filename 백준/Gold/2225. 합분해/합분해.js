const [n, k] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const dp = Array.from(new Array(k + 1), () => new Array(n + 1).fill(1));

for (let i = 2; i <= k; i++) {
  for (let j = 1; j <= n; j++) {
    dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 1000000000;
  }
}
console.log(dp[k][n]);
