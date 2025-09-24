function solution(cacheSize, cities) {
    let res = 0;
    const q = [];
    if (cacheSize === 0) return cities.length * 5;

    for (const c of cities.map(v => v.toLowerCase())) {
        if (q.includes(c)) {
            q.splice(q.indexOf(c), 1);
            q.push(c);
            res += 1;
        } 
        else {
            if (q.length >= cacheSize) {
                q.shift();
            }
            q.push(c)
            res += 5;
        }
        
        
    }
    return res
}