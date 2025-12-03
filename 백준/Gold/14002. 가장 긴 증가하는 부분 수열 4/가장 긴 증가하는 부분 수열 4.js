const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n], a] = input;
const dp = Array.from({ length: n }, () => 1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (a[i] > a[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

let len = Math.max(...dp);
console.log(len);

const res = [];
for (let i = n - 1; i >= 0; i--) {
  if (dp[i] === len) {
    res.unshift(a[i]);
    len -= 1;
  }
}

console.log(res.join(" "));
