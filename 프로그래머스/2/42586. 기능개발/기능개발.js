function solution(progresses, speeds) {
    const days = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
    
    const res = [];
    let front = 0;
    while (days.length > 0) {
        let popQ = days.shift();
        if (front < popQ) {
            res.push(1);
            front = popQ;
        }
        else {
            res[res.length - 1] += 1;
        }
    }
    return res;
}