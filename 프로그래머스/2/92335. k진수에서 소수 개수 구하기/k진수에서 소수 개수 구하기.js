const primeNum = (x) => {
    if (x === 1) return false
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) return false
    }
    return true
}

function solution(n, k) {
    const num = n.toString(k).split('0').filter(v=>v != '')
    
    let res = 0;
    for (const v of num) {
        if (primeNum(Number(v))) res += 1
    }
    return res
}