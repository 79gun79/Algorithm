const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n], ...mp] = input;
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

let mx = 0;
for (const v of mp) {
  mx = Math.max(...v, mx);
}

let res = 0;
for (let l = 0; l <= mx; l++) {
  const visited = Array.from(Array(n), () => new Array(n).fill(0));
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && mp[i][j] > l) {
        cnt += dfs(i, j, l);
      }
    }
  }
  res = Math.max(res, cnt);

  function dfs(x, y, h) {
    visited[x][y] = 1;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n || visited[nx][ny]) continue;
      if (mp[nx][ny] > h) {
        dfs(nx, ny, h);
      }
    }
    return 1;
  }
}
console.log(res);
