function solution(k, tangerine) {
    const sizeDict = tangerine.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc 
    }, {})
    
    const sizeList = Object.entries(sizeDict).sort((a, b) => b[1] - a[1]);
    
    let res = 0;
    for (let v of sizeList) {
        k -= v[1]
        res += 1
        if (k <= 0) break
    }
    
    return res
    
}