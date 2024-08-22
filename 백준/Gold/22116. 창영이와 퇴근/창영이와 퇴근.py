import sys
input = sys.stdin.readline
import heapq

n = int(input())
mp = [list(map(int, input().split())) for _ in range(n)]
visited = [[sys.maxsize for _ in range(n)] for _ in range(n)]
dx = [0,0,-1,1]
dy = [1,-1,0,0]
q = []

def Dijkstra(x, y):
    heapq.heappush(q, (x, y, 0))
    visited[x][y] = 0

    while q:
        x, y, r = heapq.heappop(q)

        if visited[x][y] < r:
            continue

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < n and 0 <= ny < n:
                res = max(abs(mp[x][y] - mp[nx][ny]), r)
                if visited[nx][ny] > res:
                    visited[nx][ny] = res
                    heapq.heappush(q, (nx,ny,res))

Dijkstra(0, 0)
print(visited[n-1][n-1])