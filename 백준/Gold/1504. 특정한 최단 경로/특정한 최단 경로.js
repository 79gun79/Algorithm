const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n, e], ...inp] = input;
const [[v1, v2]] = inp.splice(inp.length - 1, 1);

const mp = Array.from({ length: n + 1 }, () => []);
for (const v of inp) {
  const [a, b, c] = v;
  mp[a].push([b, c]);
  mp[b].push([a, c]);
}

function getMin(dis, visited) {
  let minVal = -1;
  let minDis = Infinity;

  for (let i = 1; i <= n; i++) {
    if (!visited[i] && dis[i] < minDis) {
      minVal = i;
      minDis = dis[i];
    }
  }

  return minVal;
}

function dijk(st) {
  const dis = Array(n + 1).fill(Infinity);
  const visited = Array(n + 1).fill(0);
  dis[st] = 0;

  while (true) {
    const val = getMin(dis, visited);

    if (val === -1) break;
    visited[val] = 1;

    for (const v of mp[val]) {
      if (dis[val] + v[1] < dis[v[0]]) dis[v[0]] = dis[val] + v[1];
    }
  }

  return dis;
}

const st_first = dijk(1);
const st_v1 = dijk(v1);
const st_v2 = dijk(v2);

const res = Math.min(
  st_first[v1] + st_v1[v2] + st_v2[n],
  st_first[v2] + st_v2[v1] + st_v1[n]
);

console.log(res === Infinity ? -1 : res);
