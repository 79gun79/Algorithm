function solution(weights) {
    weights.sort((a, b) => a - b);
    const cnt = Array.from( {length: 1001} , () => 0);
    
    for (const w of weights) {
        cnt[w] += 1;
    }
    
    let res = 0;
    for (let i = 100; i <= 1000; i++) {
        if (cnt[i] === 0) continue
        
        if (cnt[i] >= 2) {
            res += (cnt[i] * (cnt[i] - 1)) / 2
        }
        
        if (i <= 750 && ((i * 4) % 3) === 0) {
            res += (cnt[i] * cnt[i * (4 / 3)])
        }
        if (i <= 666 && ((i * 3) % 2) === 0) {
            res += (cnt[i] * cnt[i * (3 / 2)])
        }
        if (i <= 500) {
            res += (cnt[i] * cnt[i * 2])
        }
    }
    
    return res
}