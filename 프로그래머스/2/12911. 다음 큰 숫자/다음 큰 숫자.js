function solution(n) {
    const oneCount = n.toString(2).split('').filter(v => v==='1').length
    let num = n+1;
    
    while (true) {
        const count = num.toString(2).split('').filter(v => v==='1').length
        
        if (oneCount === count) return num
        else num += 1
    }
    
}