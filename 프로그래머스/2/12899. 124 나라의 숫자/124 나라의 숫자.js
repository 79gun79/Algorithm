function solution(n) {
    const res = [];
    while (n > 0) {
        if (n % 3) {
            res.push(n % 3)   
        }
        else {
            res.push(4)
            n -= 1
        }
        n = parseInt(n / 3)
    }
    return res.reverse().join('')
}