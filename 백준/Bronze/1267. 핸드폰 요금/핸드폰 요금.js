const { parse } = require("path");

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [n, time] = input;
let y = 0;
let m = 0;

for (const v of time) {
  y += (parseInt(v / 30) + 1) * 10;
  m += (parseInt(v / 60) + 1) * 15;
}

if (y > m) {
  console.log("M", m);
} else if (y < m) {
  console.log("Y", y);
} else {
  console.log("Y", "M", m);
}
