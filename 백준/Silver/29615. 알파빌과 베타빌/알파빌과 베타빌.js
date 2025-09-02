const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [[n, m], wait, frd] = input;

let chg = 0;
for (let i = 0; i < m; i++) {
  for (const v of frd) {
    if (wait[i] === v) {
      chg += 1;
    }
  }
}
console.log(m - chg);
