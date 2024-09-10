import sys
input = sys.stdin.readline
from collections import deque
lad = dict()
snk = dict()
mp = [0] * 101
visited = [0] * 101

n, m = map(int, input().split())
for _ in range(n):
    x, y = map(int, input().split())
    lad[x] = y

for _ in range(m):
    u, v = map(int, input().split())
    snk[u] = v

q = deque()
q.append(1)
while q:
    x = q.popleft()
    if x == 100:
        print(mp[100])
        break

    for i in range(1,7):
        nx = x + i

        if nx <= 100 and not visited[nx]:
            if nx in lad.keys():
                nx = lad[nx]
            if nx in snk.keys():
                nx = snk[nx]

            if not visited[nx]:
                visited[nx] = 1
                mp[nx] = mp[x] + 1
                q.append(nx)
