function solution(number, k) {
    let st = [];
    
    for (const v of number) {
        while ((k > 0) && (st.length > 0) && st[st.length-1] < v) {
            st.pop();
            k -= 1
        }
        st.push(v)
    }
    
    if (k != 0) {
        st = st.slice(0, st.length - k)
    }
    
    return st.join('')
}