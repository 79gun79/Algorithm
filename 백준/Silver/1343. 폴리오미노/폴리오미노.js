const s = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim();

let i = 0;
let res = "";

while (i < s.length) {
  if (s[i] === ".") {
    res += ".";
    i += 1;
  } else {
    if (s.slice(i, i + 4) === "XXXX") {
      res += "AAAA";
      i += 4;
    } else if (s.slice(i, i + 2) === "XX") {
      res += "BB";
      i += 2;
    } else {
      res = "-1";
      break;
    }
  }
}
console.log(res);
