function solution(queue1, queue2) {
    const len = queue1.length + queue2.length
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
    const q1 = [...queue1, ...queue2]
    const q2 = [...queue2, ...queue1]
    let i = 0;
    let j = 0;
    
    let res = 0;
    while (i < len && j < len) {
        if (sum1 > sum2) {
            sum1 -= q1[i]
            sum2 += q1[i]
            i++
        } else if (sum1 < sum2) {
            sum1 += q2[j]
            sum2 -= q2[j]
            j++
        } else {
            return res
        }
        res += 1
    }
    
    return -1
}