

function solution(array) {
    let cnt = new Array(1001).fill(0);
    
    for (var i = 0; i < array.length; i++) {
        cnt[array[i]] += 1;
    }
    
    var mx = 0;
    var mx_num = 0;
    
    for (var i = 0; i < cnt.length; i++) {
        if (cnt[i] > mx) {
            mx = cnt[i];
            mx_num = i;
        } else if (cnt[i] == mx) {
            mx_num = -1;
        }
    }
    
    return mx_num;
}