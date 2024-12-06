import sys
input = sys.stdin.readline

r, c, t = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(r)]

air = []
for i in range(r):
    for j in range(c):
        if a[i][j] == -1:
            air.append([i, j])
air.sort()
up = air[0]
down = air[1]

dx = [-1,1,0,0]
dy = [0,0,-1,1]

def hwaksan():
    tmp = [[0] * (c) for _ in range(r)]
    for x in range(r):
        for y in range(c):
            if a[x][y] == 0 or a[x][y] == -1:
                continue
            else:
                yang = a[x][y] // 5
                if yang == 0:
                    continue
                for i in range(4):
                    nx = dx[i] + x
                    ny = dy[i] + y

                    if nx < 0 or nx >= r or ny < 0 or ny >= c or a[nx][ny] == -1:
                        continue
                    else:
                        tmp[nx][ny] += yang
                        a[x][y] -= yang

    for x in range(r):
        for y in range(c):
            a[x][y] += tmp[x][y]

    return

def air_up():
    x, y = up[0], up[1]

    for u4 in range(x-1, 0, -1):
        a[u4][0] = a[u4-1][0]
    for u3 in range(c-1):
        a[0][u3] = a[0][u3+1]
    for u2 in range(x):
        a[u2][c-1] = a[u2+1][c-1]
    for u1 in range(c-1, y+1, -1):
        a[x][u1] = a[x][u1-1]

    a[x][y+1] = 0

def air_down():
    x, y = down[0], down[1]

    for d4 in range(x+1, r-1):
        a[d4][0] = a[d4+1][0]
    for d3 in range(c-1):
        a[r-1][d3] = a[r-1][d3+1]
    for d2 in range(r-1, x, -1):
        a[d2][c-1] = a[d2-1][c-1]
    for d1 in range(c-1, y+1, -1):
        a[x][d1] = a[x][d1-1]

    a[x][y+1] = 0

for _ in range(t):
    hwaksan()
    air_up()
    air_down()

res = 0
for k in a:
    res += sum(k)
print(res+2)
