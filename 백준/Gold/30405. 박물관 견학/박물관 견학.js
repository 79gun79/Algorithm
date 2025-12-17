const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n, m], ...p] = input;

const door = [];
for (const v of p) {
  const k = v.splice(0, 1);
  door.push(v[0]);
  door.push(v[k - 1]);
}

door.sort((a, b) => a - b);
console.log(door[n - 1]);
