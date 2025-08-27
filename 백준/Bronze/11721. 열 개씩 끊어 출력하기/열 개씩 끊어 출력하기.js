const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const [s] = input;
let n = s.length / 10;
let idx = 0;
for (let i = 0; i < n; i++) {
  console.log(s.substring(idx, idx + 10));
  idx += 10;
}
