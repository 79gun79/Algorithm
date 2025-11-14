const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n], sheet, [q], ...ques] = input;
const mis = Array.from({ length: n }, () => 0);
const njh = Array.from({ length: n }, () => 0);

for (let i = 1; i < n; i++) {
  if (sheet[i - 1] > sheet[i]) {
    mis[i] = 1;
  }
}
for (let j = 1; j < n; j++) {
  njh[j] = njh[j - 1] + mis[j];
}

const res = [];
for (const q of ques) {
  const [a, b] = q;
  res.push(njh[b - 1] - njh[a - 1]);
}
console.log(res.join("\n"));
