function solution(citations) {
    const citSort = citations.sort((a,b) => b - a);
    
    for (let i=0; i<citSort.length; i++) {
        if (citSort[i] < i+1) return i;
    }
    return citSort.length;
}