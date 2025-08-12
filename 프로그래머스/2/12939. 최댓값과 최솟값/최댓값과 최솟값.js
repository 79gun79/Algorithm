function solution(s) {
    
    const num = s.split(' ').map(v => Number(v)).sort((a, b) => a-b)
    return `${num[0]} ${num[num.length-1]}`
    
}