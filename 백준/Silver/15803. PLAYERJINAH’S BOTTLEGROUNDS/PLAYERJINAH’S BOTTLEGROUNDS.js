const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

let [...p] = input;

function calc(a, b) {
  let r1 = Math.abs(a[0] - b[0]);
  let r2 = Math.abs(a[1] - b[1]);

  if (r1 === 0 || r2 === 0) {
    return 0;
  } else {
    return r2 / r1;
  }
}

const res1 = calc(p[0], p[1]);
const res2 = calc(p[1], p[2]);
const res3 = calc(p[0], p[2]);

if (res1 === res2 && res2 === res3 && res1 === res3) {
  console.log("WHERE IS MY CHICKEN?");
} else {
  console.log("WINNER WINNER CHICKEN DINNER!");
}
