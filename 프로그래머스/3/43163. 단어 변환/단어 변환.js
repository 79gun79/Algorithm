function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    return bfs(begin, target, words);
}

function bfs(begin, target, words) {
    const q = [[begin, 0]];
    
    while (q.length > 0) {
        const [word, step] = q.shift();
        if (word === target) return step;
        
        
        for (const v of words) {
            let cnt = 0;
            for (let i = 0; i < begin.length; i++) {
                if (word[i] != v[i]) cnt += 1;
            }
            if (cnt === 1) {
                q.push([v, step + 1])
            }
        }
    }
    
}