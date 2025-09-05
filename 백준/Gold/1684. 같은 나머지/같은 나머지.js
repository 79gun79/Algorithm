const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [n, num] = input;

function gcd(n1, n2) {
  while (n2 > 0) {
    let tmp = n1 % n2;
    n1 = n2;
    n2 = tmp;
  }
  return n1;
}

const mn = Math.min(...num);
const number = num.map((v) => v - mn).filter((v) => v != 0);

let temp = number[0];
for (let i = 1; i < n; i++) {
  temp = gcd(temp, number[i]);
}

console.log(temp);
