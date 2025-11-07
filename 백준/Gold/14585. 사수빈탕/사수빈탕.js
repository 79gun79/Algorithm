const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n, m], ...pos] = input;

const mp = Array.from(new Array(301), () => Array(301).fill(0));
const dp = Array.from(new Array(301), () => Array(301).fill(0));

for (const v of pos) {
  const [x, y] = v;
  mp[x][y] = 1;
}

for (let i = 1; i <= 300; i++) {
  dp[i][0] = mp[i][0] ? Math.max(m - i, 0) : dp[i][0];
  dp[i][0] += dp[i - 1][0];

  dp[0][i] = mp[0][i] ? Math.max(m - i, 0) : dp[0][i];
  dp[0][i] += dp[0][i - 1];
}

for (let i = 1; i <= 300; i++) {
  for (let j = 1; j <= 300; j++) {
    if (mp[i][j]) {
      dp[i][j] += Math.max(0, m - i - j);
    }
    dp[i][j] += Math.max(dp[i - 1][j], dp[i][j - 1]);
  }
}
console.log(dp[300][300]);
