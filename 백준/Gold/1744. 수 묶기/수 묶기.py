import sys
input = sys.stdin.readline

n = int(input())
num = [int(input()) for _ in range(n)]

def mod_num(lst):
    minus = []
    plus = []
    res = 0
    for i in lst:
        if i <= 0:
            minus.append(i)
        elif i == 1:
            res += 1
        else:
            plus.append(i)

    plus.sort(reverse=True)
    minus.sort()
    for p in range(0, len(plus), 2):
        if p+1 >= len(plus):
            res += plus[p]
        else:
            res += plus[p] * plus[p+1]

    for m in range(0, len(minus), 2):
        if m+1 >= len(minus):
            res += minus[m]
        else:
            res += minus[m] * minus[m+1]

    return res

print(mod_num(num))