const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const [num, ...inp] = input;

const [n, m] = num.split(" ").map(Number);
const mp = inp.map((v) => v.trim().split(""));

function jegob(n) {
  return n == Math.pow(Math.floor(Math.sqrt(n)), 2) ? true : false;
}

let res = -1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    for (let r = -n; r < n; r++) {
      for (let c = -m; c < m; c++) {
        let str = "";
        let tr = i;
        let tc = j;
        while (true) {
          if (r === 0 && c === 0) break;
          if (tr < 0 || tr >= n || tc < 0 || tc >= m) break;

          str += mp[tr][tc];
          res = jegob(Number(str)) ? Math.max(res, Number(str)) : res;

          tr += r;
          tc += c;
        }
      }
    }
  }
}
console.log(res);
