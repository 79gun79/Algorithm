const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n], a] = input;

let tmp = 1;
const b = [];
for (let i = 0; i < n - 1; i++) {
  if (a[i] <= a[i + 1]) {
    tmp += 1;
  } else {
    b.push(tmp);
    tmp = 1;
  }
}
b.push(tmp);
let res = 0;
for (const v of b) {
  res += (v * (v + 1)) / 2;
}
console.log(res);
