const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const [num, ...level] = input;
let [n, k] = num.trim().split(" ").map(Number);
const x = level
  .map((v) => v.trim())
  .map(Number)
  .sort((a, b) => a - b);

let [l, r] = [x[0], x[0] + k];

let res = 0;
while (l <= r) {
  let mid = Math.round((l + r) / 2);

  let tmp = 0;
  for (const v of x) {
    if (mid - v > 0) tmp += mid - v;
    else break;
  }
  if (tmp <= k) {
    l = mid + 1;
    res = mid;
  } else {
    r = mid - 1;
  }
}
console.log(res);
