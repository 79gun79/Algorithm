const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [n, ...num] = input;
let mx = 0;
for (const v of num) {
  let tmp = 0;
  if (num.includes(v)) tmp += 1;
  if (num.includes(v + 1)) tmp += 1;
  if (num.includes(v + 2)) tmp += 1;
  if (num.includes(v + 3)) tmp += 1;
  if (num.includes(v + 4)) tmp += 1;
  mx = Math.max(mx, tmp);
}
console.log(5 - mx);
