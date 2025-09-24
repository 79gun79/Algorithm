function solution(arr1, arr2) {
    const n = arr2.length;
    const m = arr2[0].length;
    const res = [];
    for (const row of arr1) {
        let tmp = [...row];
        let res_row = [];
        for (let j = 0; j < m; j++) {
            let a = tmp.map((v, i) => v * arr2[i][j]).reduce((acc,cur) => acc+cur,0)
            res_row.push(a);
        }
        res.push(res_row);
    }

    return res
}