const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

const [n, ...cmd] = input;
const q = [];
const res = [];
let front = 0;

for (let v of cmd) {
  if (v[0] === "push") q.push(v[1]);
  if (v[0] === "pop") res.push(q.length === front ? -1 : q[front++]);
  if (v[0] === "size") res.push(q.length - front);
  if (v[0] === "empty") res.push(q.length === front ? 1 : 0);
  if (v[0] === "front") res.push(q.length === front ? -1 : q[front]);
  if (v[0] === "back") res.push(q.length === front ? -1 : q[q.length - 1]);
}

console.log(res.join("\n"));
