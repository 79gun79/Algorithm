function solution(n, computers) {
    let res = 0;
    const visited = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(computers, visited, i)
            res += 1
        }
    }
    return res;
}

function dfs(comp, visited, idx) {
    visited[idx] = 1
    for (let i = 0; i < comp.length; i++) {
        if(idx != i && !visited[i] && comp[idx][i] === 1) {
            dfs(comp, visited, i)
        }
    }
}