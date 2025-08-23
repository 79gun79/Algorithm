const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [n, ...a] = input;

const st = [];
let maxLen = 0;
let lastStudent = 0;
for (let i = 0; i < n; i++) {
  if (a[i][0] === 1) {
    st.push(a[i][1]);
    const size = st.length;

    if (size === maxLen) {
      lastStudent = Math.min(a[i][1], lastStudent);
    } else if (size > maxLen) {
      maxLen = size;
      lastStudent = a[i][1];
    }
  } else {
    if (st.length) st.shift();
  }
}
console.log(`${maxLen} ${lastStudent}`);
