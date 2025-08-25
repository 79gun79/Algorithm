const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n, k] = input;
const factorial = [...new Array(1001)].fill(BigInt(1));

for (let i = 2; i <= 1000; i++) {
  factorial[i] = BigInt(i) * factorial[i - 1];
}

console.log(
  Number((factorial[n] / (factorial[k] * factorial[n - k])) % BigInt(10007))
);
