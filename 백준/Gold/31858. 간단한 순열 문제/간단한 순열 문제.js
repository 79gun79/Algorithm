const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n], p] = input;

const st = [];
let res = 0;
for (const v of p) {
  if (st.length === 0) {
    st.push(v);
  } else {
    if (st[st.length - 1] >= v) {
      st.push(v);
      res += 1;
    } else {
      while (st.length > 0 && st[st.length - 1] < v) {
        st.pop();
        res += 1;
      }
      if (st.length > 0) {
        res += 1;
      }
      st.push(v);
    }
  }
}
console.log(res);
