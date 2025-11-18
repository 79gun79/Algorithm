const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const [num, ...inp] = input;
const [m, n] = num.trim().split(" ").map(Number);
const mp = inp.map((v) => v.trim().split("").map(Number));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function bfs() {
  const visited = Array.from(Array(n), () => Array(m).fill(0));
  const q = [[0, 0]];
  visited[0][0] = 1;

  while (q.length > 0) {
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

      if (!visited[nx][ny]) {
        if (mp[nx][ny] === 1) {
          visited[nx][ny] = visited[x][y] + 1;
          q.push([nx, ny]);
        } else {
          visited[nx][ny] = visited[x][y];
          q.unshift([nx, ny]);
        }
      }
    }
  }

  return visited[n - 1][m - 1] - 1;
}

console.log(bfs());
