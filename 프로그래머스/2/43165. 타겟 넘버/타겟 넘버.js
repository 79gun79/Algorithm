
function solution(numbers, target) {
    let res = 0;
    
    function dfs(st, num) {
        if (st === numbers.length) {
            if (num === target) res += 1;
            return;
        }
        dfs(st + 1, num + numbers[st]);
        dfs(st + 1, num - numbers[st]);
    }   
    
    dfs(0, 0)
    return res;
}