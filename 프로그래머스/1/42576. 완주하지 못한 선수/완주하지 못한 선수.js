function solution(participant, completion) {
    const marathon = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i];
        let b = completion[i];

        marathon.set(a, (marathon.get(a) || 0) + 1);
        marathon.set(b, (marathon.get(b) || 0) + 1);
    }

    for(let [k, v] of marathon) {
        if(v % 2) 
            return k;
    }
}