const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n], a, [b, c]] = input;

let res = n;
const rest = a.map((v) => {
  return v - b > 0 ? v - b : 0;
});
for (const v of rest) {
  res += Math.ceil(v / c);
}
console.log(res);
