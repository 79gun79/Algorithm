const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[t], ...inp] = input;

for (let i = 0; i < t; i++) {
  const [[n], l] = inp.splice(0, 2);

  l.sort((a, b) => a - b);

  let res = 0;
  for (let j = 0; j < n - 2; j++) {
    res = Math.max(res, l[j + 2] - l[j]);
  }
  res = Math.max(res, l[n - 1] - l[n - 2]);

  console.log(res);
}
