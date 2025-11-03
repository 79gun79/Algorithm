const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [n, k, ...inp] = input;
const pos = inp.splice(0, Number(k)).map((v) => v.split(" ").map(Number));
const l = Number(inp.splice(0, 1));

const mp = Array.from(Array(Number(n)), () => Array(Number(n)).fill(0));
for (const v of pos) {
  mp[v[0] - 1][v[1] - 1] = -1;
}

const chg = {};
for (const v of inp) {
  const [x, c] = v.split(" ");
  chg[Number(x)] = c === "L" ? -1 : 1;
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const q = [[0, 0]];
mp[0][0] = 1;
let [[nx, ny], dir, res] = [[0, 0], 0, 0];
while (true) {
  res += 1;
  nx += dx[dir];
  ny += dy[dir];

  if (nx < 0 || nx >= n || ny < 0 || ny >= n || mp[nx][ny] === 1) break;

  if (!mp[nx][ny]) {
    const [tx, ty] = q.shift();
    mp[tx][ty] = 0;
  }

  mp[nx][ny] = 1;
  q.push([nx, ny]);
  dir = (dir + 4 + (chg[res] ?? 0)) % 4;
}
console.log(res);
