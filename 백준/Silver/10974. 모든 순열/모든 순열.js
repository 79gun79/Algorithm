const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim();

const n = Number(input);

const res = [];

function dfs() {
  if (res.length === n) {
    console.log(res.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!res.includes(i)) {
      res.push(i);
      dfs();
      res.pop();
    }
  }
}
dfs();
