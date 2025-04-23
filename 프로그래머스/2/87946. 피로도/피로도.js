function solution(k, dungeons) {
    let res = 0;
    const visited = new Array(dungeons.length).fill(0);
    const dfs = (k, cnt) => {
        for (let i = 0; i < dungeons.length; i++) {
            if ((visited[i] === 0) && (k >= dungeons[i][0])) {
                visited[i] = 1;
                dfs(k-dungeons[i][1], cnt + 1);
                visited[i] = 0;
            }
        }
        res = Math.max(res, cnt);
    }
    dfs(k, 0);
    
    return res
}