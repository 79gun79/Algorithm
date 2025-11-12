const n = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let [chg, res] = [1000 - n, 0];
while (chg > 0) {
  if (chg >= 500) chg -= 500;
  else if (chg >= 100) chg -= 100;
  else if (chg >= 50) chg -= 50;
  else if (chg >= 10) chg -= 10;
  else if (chg >= 5) chg -= 5;
  else chg -= 1;
  res += 1;
}
console.log(res);
