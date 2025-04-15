function solution(prices) {
    let res = [];
    for (let i = 0; i < prices.length; i++) {
        let tmp = prices[i];
        let val = 0;
        for (let j = i+1; j < prices.length; j++) {
            val += 1;
            if (prices[i] > prices[j]) break;
        }
        res.push(val);
    }
    return res
}