import sys
input = sys.stdin.readline

n = int(input())
egg = [list(map(int, input().split())) for _ in range(n)]
res = 0

def BackTracking(st):
    global res
    if st == n:
        brk = 0
        for i in range(n):
            if egg[i][0] <= 0:
                brk += 1
        res = max(res, brk)
        return

    if egg[st][0] <= 0:
        BackTracking(st+1)
        return

    check = True
    for i in range(n):
        if i == st:
            continue
        if egg[i][0] > 0:
            check = False
            break
    if check:
        res = max(res, n-1)
        return

    for i in range(n):
        if i != st and egg[i][0] > 0:
            egg[st][0] -= egg[i][1]
            egg[i][0] -= egg[st][1]
            BackTracking(st+1)
            egg[st][0] += egg[i][1]
            egg[i][0] += egg[st][1]

BackTracking(0)
print(res)