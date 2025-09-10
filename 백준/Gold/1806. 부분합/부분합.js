const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n, s], a] = input;

let i = 0;
let j = 0;
let hap = a[0];

let res = 100001;
while (true) {
  if (hap < s) {
    j += 1;
    if (j === n) break;
    hap += a[j];
  } else {
    hap -= a[i];
    res = Math.min(res, j - i + 1);
    i += 1;
  }
}
console.log(res === 100001 ? 0 : res);
