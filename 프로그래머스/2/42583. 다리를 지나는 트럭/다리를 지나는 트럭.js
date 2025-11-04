function solution(bridge_length, weight, truck_weights) {
    let res = 0;
    const deq = Array.from({length: bridge_length}, () => 0);
    
    let cur = 0;
    while (truck_weights.length > 0) {
        res += 1;
        cur -= deq.shift();
        
        if (cur + truck_weights[0] <= weight) {
            cur += truck_weights[0]
            deq.push(truck_weights.shift())
        }
        else {
            deq.push(0)
        }
    }
    
    return res + bridge_length
}