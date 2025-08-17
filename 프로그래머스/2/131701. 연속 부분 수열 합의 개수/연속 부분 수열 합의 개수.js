function solution(elements) {
    const circlePer = [...elements, ...elements]
    const set = new Set()
    for (let i = 0; i < elements.length; i++) {
        let sum = 0;
        for (let j = 0; j < elements.length; j++) {
            sum += circlePer[i + j];
            set.add(sum);
        }
    }    
    return set.size
}