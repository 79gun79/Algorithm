function solution(citations) {
    const cit = citations.sort((a, b) => b - a)
    for (let i = 0; i < cit.length; i++) {
        if (cit[i] < i+1) {
            return i
        }
    }
    return cit.length
}