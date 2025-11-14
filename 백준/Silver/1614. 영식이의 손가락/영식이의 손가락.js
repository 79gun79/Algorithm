const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [n, k] = input;
let t = parseInt(k / 2);

let res = 0;
switch (n) {
  case 1:
    res = k * 8;
    break;
  case 2:
    res = t * 8 + (k % 2 ? 7 : 1);
    break;
  case 3:
    res = t * 8 + (k % 2 ? 6 : 2);
    break;
  case 4:
    res = t * 8 + (k % 2 ? 5 : 3);
    break;
  case 5:
    res = k * 8 + 4;
    break;
}
console.log(res);
