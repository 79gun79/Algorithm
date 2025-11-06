const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [t, ...inp] = input;

for (let v of inp) {
  let res = 0;
  while (v != 6174) {
    res += 1;
    let num = String(v).split("").map(Number);

    v = num.sort((a, b) => b - a).join("");
    v -= num.sort((a, b) => a - b).join("");

    if (v < 1000) {
      let tmp = String(v).padEnd(4, "0");
      v = Number(tmp);
    }
  }
  console.log(res);
}
