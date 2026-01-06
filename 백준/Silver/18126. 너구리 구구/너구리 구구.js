const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n], ...inf] = input;
const mp = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => 0);

for (const v of inf) {
  const [a, b, c] = v;
  mp[a].push([b, c]);
  mp[b].push([a, c]);
}

function bfs() {
  const distance = Array.from({ length: n + 1 }, () => 0);
  const q = [[1, 0]];
  visited[1] = 1;

  while (q.length > 0) {
    const [val, dis] = q.pop();
    for (const [v, d] of mp[val]) {
      if (!visited[v]) {
        distance[v] = dis + d;
        visited[v] = 1;
        q.push([v, distance[v]]);
      }
    }
  }

  return Math.max(...distance);
}
console.log(bfs());
