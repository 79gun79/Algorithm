const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b] = input;
let res = 0;

function gmsoo(num) {
  if (num > b) return;

  if (num >= a && num <= b) res++;

  gmsoo(num * 10 + 4);
  gmsoo(num * 10 + 7);
}

gmsoo(4);
gmsoo(7);
console.log(res);
