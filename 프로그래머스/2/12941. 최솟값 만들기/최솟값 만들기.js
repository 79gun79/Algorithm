function solution(A,B){
    A = A.sort((a, b) => a - b)
    B = B.sort((a, b) => b - a)
    const res = A.map((v, i) => (v * B[i]))
    return res.reduce((acc, cur) => acc+cur, 0)
}