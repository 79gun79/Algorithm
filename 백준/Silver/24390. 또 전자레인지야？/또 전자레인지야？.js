const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split(":")
  .map(Number);

let m = input[0] * 60 + input[1];

let res = 0;
let flag = false;
while (m > 0) {
  if (m >= 600) {
    m -= 600;
    res += 1;
  } else if (m >= 60) {
    m -= 60;
    res += 1;
  } else if (m >= 30) {
    m -= 30;
    res += 1;
    flag = true;
  } else {
    m -= 10;
    res += 1;
  }
}

console.log(flag ? res : res + 1);
