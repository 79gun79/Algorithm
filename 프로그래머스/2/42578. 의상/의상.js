function solution(clothes) {
    const clothesType = {};
    
    for (let v of clothes) {
        clothesType[v[1]] = (clothesType[v[1]] || 0) + 1;
    }

    let res = 1;
    for (let i in clothesType) {
        res *= (clothesType[i] + 1);
    }
    res--;
    
    return res;
}