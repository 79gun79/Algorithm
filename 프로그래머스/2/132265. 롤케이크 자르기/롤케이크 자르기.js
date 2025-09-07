function solution(topping) {
    let cso = {}
    let bro = {}
    let cso_c = 0
    let bro_c = 0
    
    let res = 0;
    for (let i = 0; i < topping.length; i++) {
        if(!cso[topping[i]]) cso_c += 1
        cso[topping[i]] = (cso[topping[i]] || 0) + 1
    }
    
    for (const v of topping) {
        if (cso[v] - 1 === 0) cso_c -= 1
        cso[v] -= 1
        
        if (!bro[v]) bro_c += 1
        bro[v] = (bro[v] || 0) + 1
        
        if (cso_c === bro_c) res += 1
   }
    return res
}