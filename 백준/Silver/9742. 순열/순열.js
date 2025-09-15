const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

for (const [val, idx] of input) {
  let cnt = 0;
  let res = "No permutation";
  const visited = new Array(val.length).fill(0);

  function dfs(str) {
    if (val.length === str.length) {
      cnt += 1;
      if (cnt === Number(idx)) res = str;
      return;
    }

    for (let i = 0; i < val.length; i++) {
      if (!visited[i]) {
        visited[i] = 1;
        dfs(str + val[i]);
        visited[i] = 0;
      }
    }
    return;
  }

  dfs("");
  console.log(`${val} ${idx} = ${res}`);
}
