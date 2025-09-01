const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [n, f] = input;
const num = parseInt(n / 100) * 100;

function divNum(num) {
  for (let i = 0; i < 100; i++) {
    let tmp = num + i;
    if (tmp % f === 0) return i;
  }
}

console.log(divNum(num) < 10 ? "0" + String(divNum(num)) : divNum(num));
