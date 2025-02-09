function solution(my_string) {
    var strlst = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < my_string.length; i++) {
        for (let j = 0; j < strlst.length; j++) {
            my_string = my_string.replaceAll(strlst[j], '');
        }   
    }
    
    return my_string
}