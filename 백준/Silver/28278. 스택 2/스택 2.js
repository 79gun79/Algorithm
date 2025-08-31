const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [n, ...cmd] = input;

const st = [];
const res = [];

for (const v of cmd) {
  if (v[0] === 1) {
    st.push(v[1]);
  }
  if (v[0] === 2) {
    if (st.length <= 0) res.push(-1);
    else res.push(st.pop());
  }
  if (v[0] === 3) {
    res.push(st.length);
  }
  if (v[0] === 4) {
    if (st.length <= 0) res.push(1);
    else res.push(0);
  }
  if (v[0] === 5) {
    if (st.length <= 0) res.push(-1);
    else res.push(st[st.length - 1]);
  }
}

console.log(res.join("\n"));
