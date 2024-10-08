import sys
input = sys.stdin.readline

s1 = input().strip('\n')
s2 = input().strip('\n')

g1 = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
g2 = {'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900}

def changeNum(s):
    num = 0
    visit = [0] * len(s)
    for i in range(len(s)):
        if visit[i] == 0:
            if i+1 < len(s) and s[i:i+2] in g2.keys():
                visit[i] = 1
                visit[i+1] =1
                num += int(g2[s[i:i+2]])
            else:
                visit[i] = 1
                num += int(g1[s[i]])
    return num

def changeStr(n):
    s = ""
    while n > 0:
        if n >= 1000:
            s += 'M'
            n -= 1000
        elif n >= 900:
            s += 'CM'
            n -= 900
        elif n >= 500:
            s += 'D'
            n -= 500
        elif n >= 400:
            s += 'CD'
            n -= 400
        elif n >= 100:
            s += 'C'
            n -= 100
        elif n >= 90:
            s += 'XC'
            n -= 90
        elif n >= 50:
            s += 'L'
            n -= 50
        elif n >= 40:
            s += 'XL'
            n -= 40
        elif n >= 10:
            s += 'X'
            n -= 10
        elif n >= 9:
            s += 'IX'
            n -= 9
        elif n >= 5:
            s += 'V'
            n -= 5
        elif n >= 4:
            s += 'IV'
            n -= 4
        elif n >= 1:
            s += 'I'
            n -= 1
    return s

res = changeNum(s1) + changeNum(s2)
print(res)
print(changeStr(res))
