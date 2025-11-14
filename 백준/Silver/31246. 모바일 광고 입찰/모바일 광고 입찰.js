const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

let [[n, k], ...inp] = input;

const chg = [];
for (const v of inp) {
  const [a, b] = v;
  if (a < b) {
    chg.push(b - a);
  } else {
    k -= 1;
  }
}

chg.sort((a, b) => a - b);
if (k > 0) {
  console.log(chg[k - 1]);
} else {
  console.log(0);
}
