function solution(fees, records) {
    const [m, w, mper, wper] = fees;
    let car = {}
    let rc = {}
    
    for (const v of records.map(v=>v.split(" "))) {
        const [hh, mm] = v[0].split(':')
        const minutes = Number(hh) * 60 + Number(mm)
        
        if (v[2] === "IN") {
            car[v[1]] = (car[v[1]] || 0)
            rc[v[1]] = minutes
        } else {
            const tmp =  minutes - rc[v[1]]
            car[v[1]] += tmp
            rc[v[1]] = -1
        }
    }
    
    for (const v of Object.entries(rc)) {
        if (v[1] != -1) {
            car[v[0]] += (1439 - v[1])
        }
    }
    
    let res = []
    for (const v of Object.entries(car)) {
        const tmp = v[1] > m ? w + Math.ceil((v[1] - m) / mper) * wper : w
        res.push([v[0], tmp])
    }
    res.sort((a, b) => a[0] - b[0])
    return res.map(v=>v[1])
}