const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(" "));

const [k, op] = input;
const visited = new Array(10).fill(0);
let mx = "";
let mn = "";

function check(a, b, oper) {
  if (oper === ">") return a > b;
  else return a < b;
}

function dfs(num, idx) {
  if (idx === Number(k) + 1) {
    if (mn === "") mn = num;
    else mx = num;
    return;
  }
  for (let i = 0; i < 10; i++) {
    if (!visited[i]) {
      if (idx === 0 || check(num[num.length - 1], String(i), op[idx - 1])) {
        visited[i] = 1;
        dfs(num + String(i), idx + 1);
        visited[i] = 0;
      }
    }
  }
}
dfs("", 0);
console.log(mx);
console.log(mn);
