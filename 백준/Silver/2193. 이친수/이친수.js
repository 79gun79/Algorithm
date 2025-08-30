const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim();

const n = Number(input);
let arr = [...new Array(n + 1)].fill(0);

for (let i = 1; i <= n; i++) {
  if (i === 1) arr[i] = 1n;
  else arr[i] = BigInt(arr[i - 2]) + BigInt(arr[i - 1]);
}
console.log(BigInt(arr[n]).toString());
