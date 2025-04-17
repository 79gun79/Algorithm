function solution(s){
    const str = [...s];
    const st = [];
    for (let i of str) {
        if (i === '(') {
            st.push(i)
        }
        else {
            if (st.length === 0) return false;
            else { st.pop()}
        }
    }
    return st.length === 0 ? true : false
}