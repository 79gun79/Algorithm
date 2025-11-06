const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[t], ...inp] = input;

function binary(lst, compare) {
  let [s, e] = [0, lst.length - 1];
  let res = -1;
  while (s <= e) {
    let mid = parseInt((s + e) / 2);
    if (lst[mid] < compare) {
      res = mid;
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return res;
}

for (let i = 0; i < inp.length; i += 3) {
  const [n, m] = inp[i];
  const a = inp[i + 1];
  const b = inp[i + 2];

  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  let res = 0;
  for (const v of a) {
    res += binary(b, v) + 1;
  }
  console.log(res);
}
