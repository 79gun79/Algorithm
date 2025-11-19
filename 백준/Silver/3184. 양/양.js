const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const [num, ...inp] = input;
const [r, c] = num.trim().split(" ").map(Number);
const mp = inp.map((v) => v.trim().split(""));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];
const visited = Array.from(Array(r), () => Array(c).fill(0));

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (mp[i][j] === "#") visited[i][j] = 1;
  }
}

function bfs(a, b) {
  const q = [[a, b]];
  visited[a][b] = 1;
  let [o, v] = [0, 0];
  if (mp[a][b] === "o") o += 1;
  if (mp[a][b] === "v") v += 1;

  while (q.length > 0) {
    const [x, y] = q.shift();
    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];

      if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;

      if (!visited[nx][ny]) {
        q.push([nx, ny]);
        visited[nx][ny] = 1;
        if (mp[nx][ny] === "o") o += 1;
        if (mp[nx][ny] === "v") v += 1;
      }
    }
  }

  return [o, v];
}

let res = [0, 0];
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (!visited[i][j]) {
      const [sheep, wolf] = bfs(i, j);

      if (sheep > wolf) {
        res[0] += sheep;
      } else {
        res[1] += wolf;
      }
    }
  }
}
console.log(res.join(" "));
