function solution(n) {
    var m = String(n);
    var res = 0;
    for (let i = 0; i < m.length; i++){
        res += parseInt(m[i]);
    }
    return res
}