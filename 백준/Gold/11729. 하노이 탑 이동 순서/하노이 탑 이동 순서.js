const n = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const k = 2 ** n - 1;

const res = [];
function hanoi(x, st, ed) {
  if (x === 0) return;
  hanoi(x - 1, st, 6 - st - ed);
  res.push([st, ed]);
  hanoi(x - 1, 6 - st - ed, ed);
}

hanoi(n, 1, 3);
console.log(k);
console.log(res.map((v) => v.join(" ")).join("\n"));
