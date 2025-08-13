function solution(n) {
    const num = [...new Array(n)].map((_, i) => i + 1);
    
    let res = 0;
    for (let i=0; i<n; i++) {
        let tmp = num[i];
        for (let j=i+1; j<=n; j++) {
            tmp += num[j];
            if (tmp === n) {
                res += 1;
                break;
            }
            if (tmp > n) {
                break;
            }
        }
    }    
    return ++res
}