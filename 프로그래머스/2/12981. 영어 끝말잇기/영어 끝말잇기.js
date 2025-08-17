function solution(n, words) {
    let s = words[0][words[0].length-1];
    let res = [0, 0]
    let stack = [words[0]];
    
    for (let i = 1; i < words.length; i++) {
        if (s != words[i][0] || stack.includes(words[i]) ) {
            res = [(i % n) + 1, parseInt(i / n) + 1 ]
            break
        } else {
            s = words[i][words[i].length - 1]
            stack.push(words[i])
        }
    }
    
    return res
}