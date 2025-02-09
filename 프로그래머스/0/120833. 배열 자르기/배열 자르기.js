function solution(numbers, num1, num2) {
    var lst = [];
    for (let i = num1; i <= num2; i++){
        lst.push(numbers[i]);
    }
    
    return lst
}