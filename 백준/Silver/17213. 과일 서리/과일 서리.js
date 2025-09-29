const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [n, m] = input;
const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

if (n === 1 || n === m) {
  console.log(1);
  process.exit();
} else {
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= m; j++) {
      if (i === 1) dp[i][j] = 1;
      else {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
      }
    }
  }
  console.log(dp[n][m]);
}
