const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n, k], num] = input;

let tmp = num.slice(0, k).reduce((acc, cur) => acc + cur, 0);

let mx = tmp;
for (let i = 0; i < n - k; i++) {
  tmp -= num[i];
  tmp += num[i + k];
  mx = mx < tmp ? tmp : mx;
}
console.log(mx);
