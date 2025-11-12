const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n");

const [n, ...inp] = input;
const hist = inp.map((v) => v.trim().split(" "));

const dic = {};
for (const v of hist) {
  if (v[1] === "enter") {
    dic[v[0]] = 1;
  } else {
    dic[v[0]] = 0;
  }
}
console.log(
  Object.entries(dic)
    .filter((v) => v[1] === 1)
    .map((v) => v[0])
    .sort()
    .reverse()
    .join("\n")
);
