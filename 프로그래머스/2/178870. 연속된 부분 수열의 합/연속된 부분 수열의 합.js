function solution(sequence, k) {
    let i = 0;
    let j = 0;
    
    let hap = sequence[0];
    let res = [0, sequence.length]
    
    while (i < sequence.length && j < sequence.length) {
        if (hap < k) {
            j += 1
            if(j >= sequence.length) break;
            hap += sequence[j]
        }
        else if(hap > k) {
            hap -= sequence[i]
            i += 1
        }
        else {
            if (res[1]-res[0] > j - i) res = [i, j]
            hap -= sequence[i]
            i += 1
        }
    }
    return res
}