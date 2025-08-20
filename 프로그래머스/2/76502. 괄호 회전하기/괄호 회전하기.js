function isValid(s) {
    const st = []
    for (let j=0; j<s.length; j++) {
        if (s[j] === '['  || s[j] === '(' || s[j] === '{') {
            st.push(s[j])
        }
        else {
            if (s[j] === ']') {
                if (st.length === 0 || st.pop() !== '[') return 0
            }
            else if (s[j] === ')') {
                if (st.length === 0 || st.pop() !== '(') return 0
            }
            else if (s[j] === '}'){
                if (st.length === 0 || st.pop() !== '{') return 0
            }
        }
    }
    return st.length === 0 ? 1 : 0
}

function solution(s) {
    let res = 0;
    for (let i=0; i<s.length; i++) {
        s = s.slice(1) + s[0]
        res += isValid(s)
    }
    return res
}

