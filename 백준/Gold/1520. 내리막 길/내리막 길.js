const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[m, n], ...mp] = input;

const visited = Array.from(new Array(m), () => Array(n).fill(-1));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function dfs(x, y) {
  if (x === m - 1 && y === n - 1) return 1;
  if (visited[x][y] != -1) return visited[x][y];

  visited[x][y] = 0;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
    if (mp[x][y] > mp[nx][ny]) visited[x][y] += dfs(nx, ny);
  }
  return visited[x][y];
}

console.log(dfs(0, 0));
