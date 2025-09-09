function solution(numbers) {
    return numbers.map(v => {
        let bin = '0' + v.toString(2)
        let len = bin.length;
        if (bin[len - 1] === '0') {
            bin = bin.substring(0, len - 1) + '1';
        }
        else {
            const idx = bin.lastIndexOf('01');
            bin = bin.substring(0, idx) + '10' + bin.substring(idx + 2, len);
        }
        
        return parseInt(bin, 2)
    })
}