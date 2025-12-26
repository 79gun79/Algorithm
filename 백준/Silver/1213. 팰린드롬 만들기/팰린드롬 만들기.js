const s = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
  .toString()
  .trim()
  .split("");

const dic = {};
for (const t of s) {
  dic[t] = (dic[t] || 0) + 1;
}

function pallindrom(arr) {
  let res = "";
  let flag = false;
  let cent = "";

  for (const v of arr) {
    if (v[1] % 2) {
      if (flag) return "I'm Sorry Hansoo";
      else flag = true;
    }
    res += v[0].repeat(Math.floor(v[1] / 2));

    cent = v[1] % 2 ? v[0] : cent;
  }

  let tmp = res.split("").reverse().join("");

  return res + cent + tmp;
}

console.log(pallindrom(Object.entries(dic).sort()));
