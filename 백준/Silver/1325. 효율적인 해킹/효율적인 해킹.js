const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(Number));
const [N, M] = input[0];
 
const graph = Array.from({ length: N + 1 }, () => []);
 
for (let i = 1; i <= M; i++) {
    const [a, b] = input[i];
    graph[b].push(a); 
}
 
function dfs(start) {
    const stack = [start];
    const visited = new Array(N + 1).fill(false);
    let count = 1; 
    visited[start] = true;
    
    while (stack.length > 0) {
        const current = stack.pop();
        
        for (let i = 0; i < graph[current].length; i++) {
            const next = graph[current][i];
            if (!visited[next]) {
                visited[next] = true;
                stack.push(next);
                count++;
            }
        }
    }
    
    return count;
}
 
let maxCount = 0;
const result = [];
 
for (let i = 1; i <= N; i++) {
    const count = dfs(i);
    if (count > maxCount) {
        maxCount = count;
        result.length = 0; 
        result.push(i);
    } else if (count === maxCount) {
        result.push(i);
    }
}

console.log(result.join(' '));