function solution(phone_book) {
    phone_book.sort((a, b) => a.length - b.length);
    
    const map = {};
    for (let key of phone_book) {
        map[key] = 1;
    }
    for (let key of phone_book) {
        for (let i = 0; i < key.length; i++) {
            let prefix = key.slice(0, i);
            if (prefix in map) {
                return false;
            }
        }
    }
    
    return true;
}