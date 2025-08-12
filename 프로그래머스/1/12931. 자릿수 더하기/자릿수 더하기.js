function solution(n)
{
    const num = n.toString();
    let res = 0;
    for (let i = 0; i < num.length; i++) {
        res += Number(num[i])
    }
    return res
}