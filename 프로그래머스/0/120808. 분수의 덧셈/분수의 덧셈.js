function gcd(a, b) {
    let temp;
    while (a % b > 0) {
        temp = a % b;
        a = b;
        b = temp;
    }
    return b;
}

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var boonmo;
    boonmo = denom1 * denom2;
    var boonja;
    boonja = (numer1 * denom2) + (numer2 * denom1);
    
    var sm = gcd(boonmo, boonja);
    answer[0] = boonja / sm;
    answer[1] = boonmo / sm;
    
    return answer;
}