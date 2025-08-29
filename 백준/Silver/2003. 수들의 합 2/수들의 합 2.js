const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [[n, m], a] = input;
let res = 0;
for (let i = 0; i < n; i++) {
  let hap = a[i];
  let j = i + 1;
  while (hap < m && j < n) {
    hap += a[j];
    j++;
  }
  if (hap === m) res += 1;
}

console.log(res);
