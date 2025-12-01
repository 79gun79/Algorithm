const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const gear = input.splice(0, 4).map((v) => v.trim().split(""));
const [[k], ...inp] = input.map((v) => v.trim().split(" ").map(Number));

function checkLeft(num, dir) {
  if (num < 0) return;
  if (gear[num][2] != gear[num + 1][6]) {
    checkLeft(num - 1, -dir);
    dir === 1 ? rotateRight(gear[num]) : rotateLeft(gear[num]);
  }
}

function checkRight(num, dir) {
  if (num > 3) return;
  if (gear[num][6] != gear[num - 1][2]) {
    checkRight(num + 1, -dir);
    dir === 1 ? rotateRight(gear[num]) : rotateLeft(gear[num]);
  }
}

function rotateLeft(s) {
  const first = s.shift();
  s.push(first);
  return s;
}

function rotateRight(s) {
  const last = s.pop();
  s.unshift(last);
  return s;
}

for (const v of inp) {
  const num = v[0] - 1;
  const dir = v[1];

  checkLeft(num - 1, -dir);
  checkRight(num + 1, -dir);
  dir === 1 ? rotateRight(gear[num]) : rotateLeft(gear[num]);
}

let res = 0;
res += gear[0][0] === "1" ? 1 : 0;
res += gear[1][0] === "1" ? 2 : 0;
res += gear[2][0] === "1" ? 4 : 0;
res += gear[3][0] === "1" ? 8 : 0;
console.log(res);
