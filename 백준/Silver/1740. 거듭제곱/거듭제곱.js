const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);

const [n] = input;
const bin = n.toString(2);

let res = 0n;
for (let i = 0; i < bin.length; i++) {
  if (bin[i] === "1") {
    res += 3n ** BigInt(bin.length - i - 1);
  }
}
console.log(res.toString());
