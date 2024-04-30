import sys
input = sys.stdin.readline
dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]

def DFS(x, y):
    global cnt
    if x < 0 or x >= n or y < 0 or y >= n:
        return False

    if mp[x][y] == 1:
        cnt += 1
        mp[x][y] = 0
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            DFS(nx, ny)
        return True
    return False


n = int(input())
mp = []
for _ in range(n):
    mp.append(list(map(int,input().strip('\n'))))

cnt = 0
res = []
for i in range(n):
    for j in range(n):
        if DFS(i, j) == True:
            res.append(cnt)
            cnt = 0
res.sort()
print(len(res))
for k in res:
    print(k)
