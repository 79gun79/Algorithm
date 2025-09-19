function solution(record) {
    const rc = record.map(v=> v.split(' '))
    let id = {}
    let tmp = []
    
    for (const v of rc) {
        const [cmd, uid, nick] = v;
        if (cmd === "Enter") {
            id[uid] = nick
            tmp.push(['Enter', uid])
        }
        else if (cmd === "Leave") {
            tmp.push(['Leave', uid])
        } else {
            id[uid] = nick
        }
    }
    
    let res = []
    for (const r of tmp) {
        if (r[0] === 'Enter') {
            res.push(`${id[r[1]]}님이 들어왔습니다.`)
        } else {
            res.push(`${id[r[1]]}님이 나갔습니다.`)
        }
    }
    return res
}