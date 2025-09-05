const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [t, ...ts] = input;

let i = 0;
while (i < ts.length) {
  const n = ts[i];
  const candi = ts.slice(i + 1, i + n + 1);
  i += n + 1;

  const mx = Math.max(...candi);

  if (candi.filter((v) => v === mx).length > 1) {
    console.log("no winner");
  } else {
    const idx = candi.indexOf(mx) + 1;
    const all = candi.reduce((acc, cur) => acc + cur, 0);

    console.log(
      all < 2 * mx ? `majority winner ${idx}` : `minority winner ${idx}`
    );
  }
}
