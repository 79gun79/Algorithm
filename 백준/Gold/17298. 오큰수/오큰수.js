const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [n, a] = input;
const st = [0]; // 인덱스

for (let i = 1; i < n; i++) {
  while (st.length > 0 && a[st[st.length - 1]] < a[i]) {
    a[st.pop()] = a[i];
  }
  st.push(i);
}

while (st.length > 0) {
  a[st.pop()] = -1;
}

console.log(a.join(" "));
