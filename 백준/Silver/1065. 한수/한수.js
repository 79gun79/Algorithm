const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input);

let res = 0;
for (let i = 1; i <= n; i++) {
  const tmp = String(i).split("").map(Number);
  if (i > 0 && i <= 99) res += 1;
  else if (tmp[0] - tmp[1] === tmp[1] - tmp[2]) res += 1;
}
console.log(res);
