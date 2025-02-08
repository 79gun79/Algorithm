function solution(slice, n) {
    var nmj = n % slice;
    var res;
    if (nmj == 0) {
        res = parseInt(n / slice);
    } else {
        res = parseInt(n / slice) + 1;
    }
    
    return res;
}