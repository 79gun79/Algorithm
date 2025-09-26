const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [t, ...num] = input;

for (const n of num) {
  let tmp = BigInt(n) % 28n;
  tmp = Number(tmp);
  if (tmp === 0) {
    tmp = 2;
  }
  if (tmp > 15) {
    tmp = 30 - tmp;
  }
  console.log(
    tmp
      .toString(2)
      .padStart(4, "0")
      .replaceAll("0", "V")
      .replaceAll("1", "딸기")
  );
}
