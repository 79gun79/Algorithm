function solution(priorities, location) {
    let res = 0;
    let highRank = Math.max(...priorities)
    
    while (true) {
        const pr = priorities.shift()
        if (highRank === pr) {
            ++res
            if (location === 0) return res
            highRank = Math.max(...priorities)
        }
        else {
            priorities.push(pr)
        }
        
        location = location === 0 ? priorities.length - 1 : location - 1
    }
    
}