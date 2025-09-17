const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [n, ...s] = input;
const visited = new Array(n).fill(0);

let res = Number.MAX_SAFE_INTEGER;
function dfs(idx, cnt) {
  if (cnt === n / 2) {
    difference(visited);
    return;
  }

  for (let i = idx; i < n; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      dfs(i + 1, cnt + 1);
      visited[i] = 0;
    }
  }
}

function difference(st) {
  let start = 0;
  let link = 0;
  let steam = [];
  let lteam = [];

  for (let i = 0; i < n; i++) {
    visited[i] ? steam.push(i) : lteam.push(i);
  }

  for (let i = 0; i < n / 2; i++) {
    for (let j = i + 1; j < n / 2; j++) {
      start += s[steam[i]][steam[j]] + s[steam[j]][steam[i]];
      link += s[lteam[i]][lteam[j]] + s[lteam[j]][lteam[i]];
    }
  }
  res = Math.min(res, Math.abs(start - link));
  return;
}
dfs(0, 0);
console.log(res);
