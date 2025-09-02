const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [l, a] = input;
const visited = [...new Array(10)].fill(false);
visited[a[0]] = true;

function pattern(v) {
  for (let i = 1; i < l; i++) {
    let prev = a[i - 1];
    let now = a[i];
    if (v[now]) return "NO";
    v[now] = true;

    if (!v[2]) {
      if (prev + now === 4) return "NO";
    }
    if (!v[4]) {
      if ((prev === 1 && now === 7) || (prev === 7 && now === 1)) return "NO";
    }
    if (!v[5]) {
      if (prev + now === 10) return "NO";
    }
    if (!v[6]) {
      if ((prev === 3 && now === 9) || (prev === 9 && now === 3)) return "NO";
    }
    if (!v[8]) {
      if (prev + now === 16) return "NO";
    }
  }
  return "YES";
}
console.log(pattern(visited));
