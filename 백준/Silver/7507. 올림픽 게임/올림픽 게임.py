import sys
input = sys.stdin.readline

n = int(input())

for i in range(n):
    if i > 0:
        print()
    m = int(input())
    gm = [list(map(int, input().split())) for _ in range(m)]
    gm.sort(key=lambda x: (x[0], x[2]))

    d = 0
    e = 0
    res = 0
    for j in range(m):
        if d != gm[j][0]:
            d = gm[j][0]
            e = gm[j][2]
            res += 1
            continue
        else:
            if e <= gm[j][1]:
                e = gm[j][2]
                res += 1

    print(f'Scenario #{i+1}:')
    print(res)
