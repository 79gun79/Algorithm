function solution(n) {
    var nameoji = n % 7;
    var mok;
    if (nameoji == 0) {
        mok = parseInt(n / 7);
    } else {
        mok = parseInt(n / 7) + 1;
    }

    return mok;
}