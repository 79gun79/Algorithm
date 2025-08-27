const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [t, ...pos] = input;

for (const v of pos) {
  const [x1, y1, r1, x2, y2, r2] = v;
  const d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

  if (d === 0 && r1 === r2) {
    console.log(-1);
  } else if (d > r1 + r2 || d < Math.abs(r1 - r2)) {
    console.log(0);
  } else if (d === r1 + r2 || d === Math.abs(r1 - r2)) {
    console.log(1);
  } else {
    console.log(2);
  }
}
