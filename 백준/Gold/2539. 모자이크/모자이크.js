const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[r, c], p, w, ...pos] = input;

let [s, e] = [1, r];
let wrong = [];

for (const v of pos) {
  wrong.push(v[1]);
  if (s < v[0]) s = v[0];
}
wrong.sort((a, b) => a - b);

function count_p(cm) {
  let cnt = 1;
  let st = wrong[0];
  if (wrong.length > 1) {
    for (const v of wrong) {
      if (v >= st + cm) {
        cnt += 1;
        st = v;
      }
    }
  }

  return cnt;
}

let res = r;
while (s <= e) {
  let mid = parseInt((s + e) / 2);
  if (count_p(mid) <= p) {
    res = mid < res ? mid : res;
    e = mid - 1;
  } else {
    s = mid + 1;
  }
}

console.log(res);
