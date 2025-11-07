function solution(s) {
    let res = s.length;
    
    for (let i = 1; i <= parseInt(s.length / 2); i++) {
        let tmp  = ''
        let prev = s.substring(0, i)
        let cnt = 1
        
        for (let j = i; j < s.length; j += i) {
            if (prev === s.substring(j, j+i)) {
                cnt += 1;
            }
            else {
                tmp += (cnt >= 2 ? String(cnt) : '') + prev
                prev = s.substring(j, j+i);
                cnt = 1;
            }
        }
        
        tmp += (cnt >= 2 ? String(cnt) : '') + prev;

        res = Math.min(res, tmp.length);
    }
    return res
}