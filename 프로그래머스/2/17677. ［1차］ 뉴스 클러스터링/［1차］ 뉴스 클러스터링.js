function solution(str1, str2) {
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    
    const lst1 = [];
    let union = 0;
    let inter = 0;
    
    for (let i=0; i<str1.length-1; i++) {
        if (/^[a-zA-Z]$/.test(str1[i]) && /^[a-zA-Z]$/.test(str1[i+1]))  {
            lst1.push(`${str1[i]}${str1[i+1]}`)
        }
    }
    union += lst1.length;
    
    for (let i=0; i<str2.length-1; i++) {
        if (/^[a-zA-Z]$/.test(str2[i]) && /^[a-zA-Z]$/.test(str2[i+1]))  {
            if (lst1.includes(`${str2[i]}${str2[i+1]}`)) {
                inter += 1;
                lst1.splice(lst1.indexOf(`${str2[i]}${str2[i+1]}`), 1)
            }
            else {
                union += 1;
            }
        }
    }
    
    return union === 0 ? 65536 : parseInt((inter / union) * 65536)
}