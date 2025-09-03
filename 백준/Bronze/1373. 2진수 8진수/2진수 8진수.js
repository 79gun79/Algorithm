let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim();

let res = "";
while (input.length >= 3) {
  res = parseInt(input.slice(input.length - 3), 2).toString(8) + res;
  input = input.slice(0, input.length - 3);
}
console.log((input.length > 0 ? parseInt(input, 2).toString(8) : "") + res);
