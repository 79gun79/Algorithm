function solution(skill, skill_trees) {
    function check(s) {
        let i = 0
        for (const v of s) {
            if (skill.includes(v)) {
                if (skill[i] != v) return false
                i++
            }
        }
        return true
    }
    
    let res = 0;
    for (const s of skill_trees) {
        if (check(s)) res += 1
    }
    return res
}