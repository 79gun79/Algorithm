const { parse } = require("path");

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [[n, k], a] = input;
a.sort((a, b) => a - b);
console.log(a[k - 1]);
