const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

let [[n, k], s, d] = input;

function shuffle(s, d) {
  const tmp = Array.from({ length: d.length }, () => 0);
  for (let i = 0; i < d.length; i++) {
    tmp[d[i] - 1] = s[i];
  }
  return tmp;
}

let res = s;
while (k > 0) {
  k -= 1;
  res = shuffle(res, d);
}
console.log(res.join(" "));
