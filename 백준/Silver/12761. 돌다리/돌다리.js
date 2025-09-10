const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b, n, m] = input;

const visited = Array(100001).fill(0);

function bfs() {
  q = [n];
  visited[n] = 1;
  while (q.length > 0) {
    const x = q.shift();
    const dx = [x - 1, x + 1, x - a, x + a, x - b, x + b, a * x, b * x];
    for (const v of dx) {
      if (!visited[v] && v >= 0 && v <= 100000) {
        visited[v] = visited[x] + 1;
        q.push(v);
      }
      if (v === m) return;
    }
  }
}
bfs();
console.log(Math.max(...visited) - 1);
