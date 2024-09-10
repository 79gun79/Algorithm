import sys
input = sys.stdin.readline
dx = [-1,1,0,0]
dy = [0,0,-1,1]

n, m = map(int, input().split())
pa = [list(map(int, input().split())) for _ in range(n)]
visited = [[0 for _ in range(m)] for _ in range(n)]
mx = 0

def DFS(x, y, cnt, tmp):
    global mx
    if cnt == 4:
        mx = max(mx, tmp)
        return
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < n and 0 <= ny < m and not visited[nx][ny]:
            visited[nx][ny] = 1
            DFS(nx, ny, cnt+1, tmp+pa[nx][ny])
            visited[nx][ny] = 0

def T(x, y, tmp):
    global mx
    lst = []
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < n and 0 <= ny < m:
            lst.append(pa[nx][ny])

    if len(lst) == 4:
        lst.sort()
        mx = max(mx, sum(lst[1:]) + tmp)
    elif len(lst) == 3:
        mx = max(mx, sum(lst) + tmp)

for i in range(n):
    for j in range(m):
        visited[i][j] = 1
        DFS(i, j, 1, pa[i][j])
        T(i, j, pa[i][j])
        visited[i][j] = 0

print(mx)
