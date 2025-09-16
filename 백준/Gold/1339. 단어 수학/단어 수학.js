const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, ...str] = input;
const ap = {};

for (const st of str) {
  let power = st.length - 1;
  for (const s of st) {
    ap[s] = (ap[s] || 0) + 10 ** power;
    power -= 1;
  }
}

const ap_value = Object.values(ap).sort((a, b) => b - a);

let res = 0;
let num = 9;
for (const v of ap_value) {
  res += v * num;
  num -= 1;
}
console.log(res);
