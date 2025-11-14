const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n, k], c] = input;
const dp = Array.from({ length: k + 1 }, () => Number.MAX_SAFE_INTEGER);

dp[0] = 0;
for (const v of c) {
  for (let j = k; j >= v; j--) {
    if (j - v >= 0) dp[j] = Math.min(dp[j], dp[j - v] + 1);
  }
}

console.log(dp[k] === Number.MAX_SAFE_INTEGER ? -1 : dp[k]);
