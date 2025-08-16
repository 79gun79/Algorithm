function solution(people, limit) {
    let boat = 0;
    let st = 0;
    let ed = people.length - 1;
    
    people = people.sort((a, b) => b - a)
    while (st <= ed) {
        if (people[st] + people[ed] <= limit) {
            st += 1;
            ed -= 1;
        } else {
            st += 1;
        }
        boat += 1;
    }
    
    return boat
}