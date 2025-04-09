function solution(array, commands) { 
    const res = [];
    commands.forEach((v) => {
        let i = v[0];
        let j = v[1];
        let k = v[2];
        const sliceArr = array.slice(i-1, j);
        
        sliceArr.sort((a, b) => a - b);
        res.push(sliceArr[k-1]);
    })
    return res
}