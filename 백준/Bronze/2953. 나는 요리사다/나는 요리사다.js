const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [...num] = input;
let winNum = 0;
let winScore = 0;
for (let i = 0; i < num.length; i++) {
  const hap = num[i].reduce((acc, cur) => acc + cur, 0);
  if (winScore < hap) {
    winScore = hap;
    winNum = i + 1;
  }
}

console.log(winNum, winScore);
