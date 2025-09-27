const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

const [a, b, ...c] = input;
const [n, p] = a.map(Number);
const [w, l, g] = b.map(Number);
const lst = {};
let score = 0;

for (let i = 0; i < c.length; i++) {
  if (i < p) {
    lst[c[i][0]] = c[i][1];
  } else {
    if (Object.keys(lst).includes(c[i][0])) {
      if (lst[c[i][0]] === "W") {
        score += w;
      } else {
        score = score - l < 0 ? 0 : score - l;
      }
    } else {
      score = score - l < 0 ? 0 : score - l;
    }
  }

  if (score >= g) {
    console.log("I AM NOT IRONMAN!!");
    process.exit();
  }
}
console.log("I AM IRONMAN!!");
