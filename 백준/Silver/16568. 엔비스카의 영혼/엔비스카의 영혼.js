const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [n, a, b] = input;

const dp = Array.from({ length: n + 1 }, () => Number.MAX_SAFE_INTEGER);

if (a > b) {
  let tmp = b;
  b = a;
  a = tmp;
}

dp[0] = 0;
for (let i = 1; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i > b) dp[i] = Math.min(dp[i], dp[i - b - 1] + 1);
  if (i > a) dp[i] = Math.min(dp[i], dp[i - a - 1] + 1);
}
console.log(dp[n]);
