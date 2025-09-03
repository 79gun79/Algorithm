const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [n, ...mp] = input;
const map = Array.from(Array(501), () => Array(501).fill(0));

for (const v of mp) {
  let [x1, y1, x2, y2] = v;
  for (let i = x1; i < x2; i++) {
    for (let j = y1; j < y2; j++) {
      map[i][j] = 1;
    }
  }
}

let res = 0;
for (let i = 0; i <= 500; i++) {
  for (let j = 0; j <= 500; j++) {
    if (map[i][j]) res += 1;
  }
}
console.log(res);
