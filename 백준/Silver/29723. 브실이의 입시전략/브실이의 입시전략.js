const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

const [n, m, k] = input[0].map(Number);

const dic = {};
for (let i = 1; i <= n; i++) {
  dic[input[i][0]] = Number(input[i][1]);
}

let score = 0;
for (let j = n + 1; j < input.length; j++) {
  const sub = input[j][0];
  score += dic[sub];
  delete dic[sub];
}

const sco = Object.values(dic).sort((a, b) => a - b);
let [mn, mx] = [score, score];

for (let i = 0; i < m - k; i++) {
  mn += sco[i];
  mx += sco[sco.length - 1 - i];
}
console.log(mn, mx);
