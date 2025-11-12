const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const [num, ...inp] = input;
const [r, c] = num.trim().split(" ").map(Number);
const mp = inp.map((v) => v.trim().split(""));
const visited = Array.from(Array(r), () => Array(c).fill(0));
const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(q, visited) {
  while (q.length > 0) {
    const [x, y, s] = q.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || nx >= r || ny < 0 || ny >= c) {
        if (s === "J") {
          return visited[x][y];
        }
        continue;
      }

      if (mp[nx][ny] === "#") continue;

      if (visited[nx][ny] === 0) {
        if (mp[nx][ny] === ".") {
          q.push([nx, ny, s]);
          visited[nx][ny] = visited[x][y] + 1;
        }
      } else continue;
    }
  }
  return -1;
}

const q = [];
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (mp[i][j] === "J") {
      q.push([i, j, "J"]);
      visited[i][j] = 1;
    }
    if (mp[i][j] === "F") {
      q.unshift([i, j, "F"]);
      visited[i][j] = 1;
    }
  }
}
const res = bfs(q, visited);
console.log(res === -1 ? "IMPOSSIBLE" : res);
