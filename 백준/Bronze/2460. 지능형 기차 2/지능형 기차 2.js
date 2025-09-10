const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [...station] = input;

let mx = 0;
let cur = 0;
for (let i = 0; i < 10; i++) {
  cur = cur - station[i][0] + station[i][1];
  mx = mx < cur ? cur : mx;
}
console.log(mx);
