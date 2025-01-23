import sys
input = sys.stdin.readline

def dfs(st, cnt):
    global dis_min
    if cnt == m:
        res = 0
        for i in range(len(hm)):
            tmp = sys.maxsize
            for j in range(len(chk)):
                if visited[j] == 1:
                    dis = abs(hm[i][0] - chk[j][0]) + abs(hm[i][1] - chk[j][1])
                    tmp = min(tmp, dis)

            res += tmp
        dis_min = min(dis_min, res)


    for k in range(st, len(chk)):
        visited[k] = 1
        dfs(k+1, cnt+1)
        visited[k] = 0

n, m = map(int, input().split())
mp = [list(map(int, input().split())) for _ in range(n)]

hm = []
chk = []
for i in range(n):
    for j in range(n):
        if mp[i][j] == 1:
            hm.append((i, j))
        if mp[i][j] == 2:
            chk.append((i, j))

dis_min = sys.maxsize
visited = [0] * (len(chk))
dfs(0, 0)
print(dis_min)