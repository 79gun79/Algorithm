const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[t], ...inp] = input;

for (let i = 0; i < t; i++) {
  const [[x1, y1, x2, y2]] = inp.splice(0, 1);
  const [[n]] = inp.splice(0, 1);
  const cs = inp.splice(0, n);

  let res = 0;
  for (const v of cs) {
    const [cx, cy, r] = v;
    const d1 = (x1 - cx) ** 2 + (y1 - cy) ** 2;
    const d2 = (x2 - cx) ** 2 + (y2 - cy) ** 2;
    const r_pow = r ** 2;

    if (r_pow > d1 && r_pow > d2) {
      continue;
    } else if (r_pow > d1) {
      res += 1;
    } else if (r_pow > d2) {
      res += 1;
    }
  }
  console.log(res);
}
