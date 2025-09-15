const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [m, ...chg] = input;

let ball = [0, 1, 0, 0];

for (const v of chg) {
  let tmp = ball[v[0]];
  ball[v[0]] = ball[v[1]];
  ball[v[1]] = tmp;
}

console.log(ball.findIndex((v) => v === 1));
