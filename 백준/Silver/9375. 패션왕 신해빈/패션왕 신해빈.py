import sys
input = sys.stdin.readline

t = int(input())
while t > 0:
    n = int(input())
    cos = dict()
    for _ in range(n):
        nm, tp = input().split()
        if tp in cos.keys():
            cos[tp].append(nm)
        else:
            cos[tp] = [nm]

    res = 1
    for i in cos.keys():
        res *= (len(cos[i]) + 1)

    print(res-1)
    t -= 1
