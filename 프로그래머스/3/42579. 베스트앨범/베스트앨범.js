function solution(genres, plays) {
    const songs = {}
    const pcnt = {}
    
    for (let i = 0; i < genres.length; i++) {
        if (!songs[genres[i]]) {
            songs[genres[i]] = [[plays[i], i]]
        } else {
            songs[genres[i]].push([plays[i], i])
        }
        pcnt[genres[i]] = (pcnt[genres[i]] || 0) + plays[i]
    }
    
    const plst = Object.entries(pcnt).sort((a,b) => b[1] - a[1])
    const res = []
    for (const [v, cnt] of plst) {
        const song = songs[v].sort((a, b) => b[0] - a[0])
        res.push(...song.map(v => v[1]).filter((_, i) => i >= 0 && i < 2))
    }
    return res
}