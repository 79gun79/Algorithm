const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);

const [t, ...inp] = input;
const res = [];
for (const v of inp) {
  if (v % 9n === 0n || v % 3n === 2n) res.push("TAK");
  else res.push("NIE");
}
console.log(res.join("\n"));
