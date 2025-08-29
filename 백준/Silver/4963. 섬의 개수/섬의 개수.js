const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let w = 0;
let h = 0;
let mp = [];
let visited = [];

function bfs(x, y) {
  const dx = [0, 0, -1, 1, 1, 1, -1, -1];
  const dy = [-1, 1, 0, 0, -1, 1, 1, -1];
  const q = [];
  q.push([x, y]);

  while (q.length > 0) {
    const [a, b] = q.shift();

    for (let i = 0; i < 8; i++) {
      const nx = a + dx[i];
      const ny = b + dy[i];

      if (
        nx >= 0 &&
        nx < h &&
        ny >= 0 &&
        ny < w &&
        !visited[nx][ny] &&
        mp[nx][ny]
      ) {
        visited[nx][ny] = 1;
        q.push([nx, ny]);
      }
    }
  }
}

for (let i = 0; i < input.length - 1; i++) {
  [w, h] = input[i];
  mp = input.slice(i + 1, i + h + 1);
  i += h;
  visited = Array.from(Array(h), () => Array(w).fill(0));

  let res = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!visited[i][j] && mp[i][j]) {
        res += 1;
        bfs(i, j);
      }
    }
  }
  console.log(res);
}
