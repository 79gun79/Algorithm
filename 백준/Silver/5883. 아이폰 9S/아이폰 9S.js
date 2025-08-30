const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [n, ...b] = input;
const num = [...new Set(b)];

let res = 0;
for (const v of num) {
  let tmp = b.filter((value) => value !== v);

  let cnt = 1;
  for (let i = 1; i < tmp.length; i++) {
    if (tmp[i - 1] === tmp[i]) cnt += 1;
    else {
      cnt = 1;
    }
    res = Math.max(res, cnt);
  }
}

console.log(res);
