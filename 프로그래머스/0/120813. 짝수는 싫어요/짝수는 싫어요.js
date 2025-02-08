function solution(n) {
    var array = [];
    let j = 0;
    
    for (var i = 1; i <= n; i += 2) {
        array[j++] = i;
    }
    
    return array;
}