const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim();
let n = Number(input);

const dp = Array.from({ length: n + 1 }, () => 0);

for (let i = 1; i <= n; i++) {
  if (i === 1) dp[1] = 1;
  else dp[i] = dp[i - 1] + dp[i - 2];
}
console.log(dp[n]);
