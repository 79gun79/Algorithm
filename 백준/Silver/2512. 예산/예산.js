const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [[n], a, [m]] = input;

a.sort((a, b) => a - b);
let l = 1;
let r = a[n - 1];

let res = 0;
while (l <= r) {
  let mid = parseInt((l + r) / 2);
  let tmp = a.reduce((acc, cur) => acc + (cur > mid ? mid : cur), 0);
  if (tmp <= m) {
    l = mid + 1;
  } else {
    r = mid - 1;
  }
}

console.log(r);
