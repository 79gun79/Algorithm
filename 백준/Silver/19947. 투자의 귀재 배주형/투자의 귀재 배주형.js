const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [h, y] = input;
const dp = Array.from({ length: y + 1 }, () => 0);
dp[0] = h;

for (let i = 1; i <= y; i++) {
  if (i <= 2) {
    dp[i] = Math.floor(dp[i - 1] * 1.05);
  } else if (i <= 4) {
    dp[i] = Math.floor(Math.max(dp[i - 1] * 1.05, dp[i - 3] * 1.2));
  } else {
    dp[i] = Math.floor(
      Math.max(dp[i - 1] * 1.05, dp[i - 3] * 1.2, dp[i - 5] * 1.35)
    );
  }
}

console.log(dp[y]);
