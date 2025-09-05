const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

let [[a, b, c], [x, y, z]] = input;

let res = 0;
for (let i = 0; i < 3; i++) {
  const chk = Math.min(a, x);
  const piz = Math.min(b, y);
  const bur = Math.min(c, z);

  a -= chk;
  b -= piz;
  c -= bur;
  x -= chk;
  y -= piz;
  z -= bur;

  res += chk + piz + bur;

  let tmp = parseInt(z / 3);
  z = parseInt(y / 3);
  y = parseInt(x / 3);
  x = tmp;
}
console.log(res);
