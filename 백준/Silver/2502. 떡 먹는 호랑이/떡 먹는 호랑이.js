const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [d, k] = input;

for (let a = 1; a <= 100000; a++) {
  for (let b = 1; b <= 100000; b++) {
    const dp = Array.from({ length: d + 1 }, () => 0);

    dp[1] = a;
    dp[2] = b;

    for (let i = 3; i <= d; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }

    if (dp[d] === k) {
      console.log(dp[1]);
      console.log(dp[2]);
      process.exit();
    }
  }
}
