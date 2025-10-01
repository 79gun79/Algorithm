function solution(n, t, m, p) {
    let res = ''
    let j = 0;
    for (let i = 0; i < m*t; i++) {
        for (const v of i.toString(n).split('')) {
            if (res.length === t) break;
            if (j % m === (p - 1)) res += v.toUpperCase();
            j += 1;
        }
    }
    
    return res
}