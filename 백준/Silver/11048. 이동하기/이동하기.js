const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n = parseInt(n), m = parseInt(m)], ...mp] = input;
const dp = Array.from(Array(n), () => Array(m).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (i === 0 && j === 0) dp[i][j] = mp[0][0];
    else if (i === 0) {
      dp[i][j] = dp[i][j - 1] + mp[i][j];
    } else if (j === 0) {
      dp[i][j] = dp[i - 1][j] + mp[i][j];
    } else {
      dp[i][j] =
        Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + mp[i][j];
    }
  }
}
console.log(dp[n - 1][m - 1]);
