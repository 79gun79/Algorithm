const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));
const [[n], a] = input;

a.sort((a, b) => b - a);
let res = 0;
while (a[0] > 0) {
  if (a.length > 1) {
    if (a[0] > 0) {
      a[0] -= 1;
    }
    if (a[1] > 0) {
      a[1] -= 1;
    }
  } else {
    a[0] -= 1;
  }
  res += 1;
  a.sort((a, b) => b - a);
}
console.log(res > 1440 ? -1 : res);
