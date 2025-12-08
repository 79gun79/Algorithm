const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const mp = input.splice(0, 5);
const [[r, c]] = input;

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];
let res = false;

dfs(r, c, 0, 0);
console.log(res ? 1 : 0);

function dfs(x, y, mv, cnt) {
  if (mv > 3) return;
  if (cnt >= 2) {
    res = true;
    return;
  }

  let tmp = mp[x][y];
  mp[x][y] = -1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5 || mp[nx][ny] === -1) continue;
    dfs(nx, ny, mv + 1, cnt + mp[nx][ny]);
  }
  mp[x][y] = tmp;
}
