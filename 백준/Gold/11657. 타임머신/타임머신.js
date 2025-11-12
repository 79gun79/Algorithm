const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [[n = parseInt(n), m = parseInt(m)], ...edge] = input;
const dis = Array.from(Array(n + 1), () => Number.MAX_VALUE);

function bellmandFord(st) {
  dis[st] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let [cur, next, cost] = edge[j];
      if (dis[cur] != Number.MAX_VALUE && dis[next] > dis[cur] + cost) {
        dis[next] = dis[cur] + cost;
        if (i === n - 1) return true;
      }
    }
  }
  return false;
}

if (bellmandFord(1)) {
  console.log(-1);
} else {
  const res = [];
  for (let k = 2; k <= n; k++) {
    res.push(dis[k] === Number.MAX_VALUE ? -1 : dis[k]);
  }
  console.log(res.join("\n"));
}
