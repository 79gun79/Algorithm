function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    function bfs() {
        const q = [];
        q.push([0, 0, 1]);

        while (q.length) {
            let [x, y, dis] = q.shift();
            
            if (x === n-1 && y === m-1) return dis;
            
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                if (maps[nx][ny] === 1) {
                    q.push([nx, ny, dis+1]);
                    maps[nx][ny] = 0;
                } 
            }
        }
        return -1
    }
    return bfs();
}