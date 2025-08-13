function solution(s) {
    let chg = 0;
    let zero = 0;
    
    while (s.length > 1) {
        chg += 1
        zero += s.split('1').join('').length
        s = Number(s.split('0').join('').length).toString(2)
    }
    
    return [chg, zero]
}