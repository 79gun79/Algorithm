const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const num = input;

for (let v of num) {
  v.sort((a, b) => b - a);
  if (v[0] === 0) break;
  if (v[0] >= v[1] + v[2]) console.log("Invalid");
  else {
    let size = [...new Set(v)].length;
    switch (size) {
      case 1:
        console.log("Equilateral");
        break;
      case 2:
        console.log("Isosceles");
        break;
      default:
        console.log("Scalene ");
    }
  }
}
