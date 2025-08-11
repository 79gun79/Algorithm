function solution(number, n, m) {
    const res = (number % n === 0) && (number % m === 0) ? 1 : 0
    return res
}