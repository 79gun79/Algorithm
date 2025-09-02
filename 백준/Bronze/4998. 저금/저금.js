const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

for (const v of input) {
  const [n, b, m] = v;
  const it = 1 + b / 100;

  let money = n;
  let res = 0;
  while (money <= m) {
    money *= it;
    res += 1;
  }
  console.log(res);
}
