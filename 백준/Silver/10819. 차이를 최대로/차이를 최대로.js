const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n], a] = input;
const visited = Array.from({ length: n }, () => 0);
const b = Array.from({ length: n }, () => 0);
let res = 0;

function dfs(x) {
  if (x === n) {
    let tmp = 0;
    for (let i = 0; i < n - 1; i++) {
      tmp += Math.abs(b[i + 1] - b[i]);
    }
    res = tmp > res ? tmp : res;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      b[x] = a[i];
      dfs(x + 1);
      visited[i] = 0;
    }
  }
}

dfs(0);
console.log(res);
