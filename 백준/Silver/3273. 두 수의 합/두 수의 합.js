const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [[n], a, [x]] = input;

a.sort((a, b) => a - b);
let l = 0;
let r = n - 1;

let res = 0;
while (l < r) {
  if (a[l] + a[r] === x) {
    l += 1;
    r -= 1;
    res += 1;
  } else if (a[l] + a[r] > x) {
    r -= 1;
  } else {
    l += 1;
  }
}

console.log(res);
