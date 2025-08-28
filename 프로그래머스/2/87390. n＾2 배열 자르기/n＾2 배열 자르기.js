function solution(n, left, right) {
    let res = []

    for (let i=left; i<=right; i++) {
        const s = parseInt(i / n);
        const r = i % n;
        res.push(Math.max(s, r) + 1)
    }
    return res
}