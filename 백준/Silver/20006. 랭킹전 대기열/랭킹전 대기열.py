import sys
input = sys.stdin.readline

p, m = map(int, input().split())
game = []
for _ in range(p):
    l, n = input().split()
    l = int(l)
    flag = False

    for g in game:
        st = g[0][0]
        if len(g) < m and st - 10 <= l <= st + 10:
            g.append((l, n))
            flag = True
            break

    if not flag:
        game.append([(l, n)])


for gm in game:
    if len(gm) == m:
        print('Started!')
    else:
        print('Waiting!')
    gm.sort(key=lambda x: x[1])
    for x, y in gm:
        print(x, y)