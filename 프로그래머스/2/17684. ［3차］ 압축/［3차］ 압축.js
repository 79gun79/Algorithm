function solution(msg) {
  const res = [];
  const dic = [...new Array(26)].map((_, i) => String.fromCharCode(i + 65));
  let [i, j] = [0, 1];

  while (i < msg.length) {
    if (!dic.includes(msg.slice(i, j + 1))) {
      res.push(dic.indexOf(msg.slice(i, j)) + 1);
      dic.push(msg.slice(i, j + 1));
      i = j;
    }
    if (i === msg.length - 1 || j >= msg.length - 1) {
      res.push(dic.indexOf(msg.slice(i, msg.length)) + 1);
      break;
    }
    j += 1;
  }
  return res;
}