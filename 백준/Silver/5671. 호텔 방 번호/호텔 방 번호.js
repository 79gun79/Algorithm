const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [...s] = input;
for (let v of s) {
  const [m, n] = v;

  let res = 0;
  for (let i = m; i <= n; i++) {
    if (String(i).length === [...new Set(String(i))].length) res += 1;
  }

  console.log(res);
}
