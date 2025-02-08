function solution(strlist) {
    var array = [];
    for (let i = 0; i < strlist.length; i++) {
        array[i] = strlist[i].length;
    }
    return array;
}