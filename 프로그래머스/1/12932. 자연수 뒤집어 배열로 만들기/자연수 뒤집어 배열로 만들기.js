function solution(n) {
    const res = [...String(n)]
    res.reverse();
    return res.map(v => Number(v))
}