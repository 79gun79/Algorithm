const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

let [[n, m], a] = input;

a.sort((a, b) => {
  const cmp = (a % 10) - (b % 10);
  return cmp === 0 ? a - b : cmp;
});
let res = 0;

for (const v of a) {
  let cnt = 0;
  if (v % 10 === 0) {
    cnt = parseInt(v / 10 - 1);
    res += cnt > m ? m : cnt + 1;
  } else {
    cnt = parseInt(v / 10);
    res += cnt > m ? m : cnt;
  }
  m -= cnt;
  if (m <= 0) break;
}
console.log(res);
