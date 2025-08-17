function solution(n,a,b)
{
    let res = 1;
    let num1 = a;
    let num2 = b;
    while (res <= n) {
        num1 = Math.round(num1 / 2)
        num2 = Math.round(num2 / 2)
        if (num1 === num2) {
            break
        } else {
            res += 1;
        }
    }
    return res
}