function solution(array, commands) { 
    var answer = [];

    for (let x = 0; x < commands.length; x++ ) {
        let i, j, k = 0;
        i = commands[x][0] - 1;
        j = commands[x][1] - 1;
        k = commands[x][2] - 1;
        
        var tmp = [];
        for (let y=i; y <=j; y++) {
            tmp.push(array[y]);
        }
        
        tmp.sort((a, b) => a-b)
        answer.push(tmp[k]);
    }

    return answer;
}