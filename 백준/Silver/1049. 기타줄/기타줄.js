const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n, m], ...num] = input;

let [one, six] = [1000, 1000];
for (const v of num) {
  one = one > v[1] ? v[1] : one;
  six = six > v[0] ? v[0] : six;
}

let res = Number.MAX_SAFE_INTEGER;
res = Math.min(
  res,
  n * one,
  Math.ceil(n / 6) * six,
  Math.floor(n / 6) * six + (n % 6) * one
);

console.log(res);
