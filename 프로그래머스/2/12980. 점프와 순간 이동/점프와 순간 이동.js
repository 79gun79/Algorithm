function solution(n)
{
    let res = 0;
    while (n > 0) {
        if (n % 2) {
            n = (n-1) / 2
            res += 1
        } else {
            n /= 2
        }
    }
    
    return res
}