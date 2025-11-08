const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));
let [[n], a, [m], b] = input;

let c = a.filter((v) => b.includes(v));
if (c.length === 0) {
  console.log(0);
  process.exit();
}

const res = [];
while (c.length > 0) {
  let mx = Math.max(...c);
  res.push(mx);

  let [ai, bi] = [a.indexOf(mx), b.indexOf(mx)];
  a = a.slice(ai + 1);
  b = b.slice(bi + 1);
  c = a.filter((v) => b.includes(v));
}

console.log(res.length);
console.log(res.join(" "));
