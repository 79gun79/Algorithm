function solution(s) {
    const arr = JSON.parse(s.replaceAll('{', '[').replaceAll('}', ']')).sort((a, b) => a.length - b.length)
    
    const res = [];
    const set = new Set();
    
    for (let i of arr) {
        for (let j of i) {
            if (!set.has(j)) {
                set.add(j)
                res.push(j)
            }
        }
    }
    
    return res
    
}