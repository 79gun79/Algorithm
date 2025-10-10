function check(i, j, board) {
    if (board[i][j] != 'X' && board[i][j] === board[i + 1][j] && board[i][j] === board[i][j + 1] && board[i][j] === board[i + 1][j + 1]) {
        return true
    }
    else return false
}

function solution(m, n, board) {
    let mp = board.map(v=>v.split(''))
    let res = 0;
    
    while (true) {
        const block = new Set();
        for (let i=0; i<m-1; i++) {
            for (let j=0; j<n-1; j++) {
                if (check(i, j, mp)) {
                    block.add(`${i},${j}`)
                    block.add(`${i+1},${j}`)
                    block.add(`${i},${j+1}`)
                    block.add(`${i+1},${j+1}`)
                }   
            }
        }
        
        if (block.size === 0) return res
        
        res += block.size
        
        for (const v of block) {
            const [col, row] = v.split(',').map(Number);
            mp[col][row] = 'X'
        }
        
        for (let j=0; j<n; j++) {
            let tmp = m-1;
            
            for (let i=m-1; i>=0; i--) {
                if(mp[i][j] != 'X') {
                    if (i != tmp) {
                        mp[tmp][j] = mp[i][j]
                        mp[i][j] = 'X'
                    }
                    tmp -= 1;
                }
            }
        }
    }
}