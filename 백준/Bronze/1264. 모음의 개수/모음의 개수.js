const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim(""));

const s = input;

for (const v of s) {
  if (v === "#") break;
  let res = 0;
  for (const vi of v.toLowerCase().split("")) {
    if (
      vi.includes("a") ||
      vi.includes("e") ||
      vi.includes("i") ||
      vi.includes("o") ||
      vi.includes("u")
    ) {
      res += 1;
    }
  }
  console.log(res);
}
