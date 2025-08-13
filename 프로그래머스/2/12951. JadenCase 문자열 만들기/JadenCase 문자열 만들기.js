function solution(s) {
  return s.split(' ').map((v) => {
      if (v.length === 0) {
        return '';
      }
      return v[0].toUpperCase() + v.slice(1).toLowerCase();
    })
    .join(" ");
}
