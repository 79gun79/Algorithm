function solution(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i+1] = lcm(arr[i], arr[i+1])
    }
    return arr[arr.length-1]
}

function lcm(a, b) {
    return (a * b) / gcd(a, b)
}

function gcd(a, b) {
   return b > 0 ? gcd(b, a % b) : a
}


    