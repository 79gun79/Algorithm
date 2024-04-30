import sys
input = sys.stdin.readline
from collections import deque

v = int(input())
e = int(input())
net = [[] for _ in range(v+1)]
visit = [0] * (v+1)

for _ in range(e):
    a, b = map(int, input().split())
    net[a] += [b]
    net[b] += [a]

visit[1] = 1
q = deque([1])
cnt = 0
while q:
    i = q.popleft()
    for x in net[i]:
        if visit[x] == 0:
            q.append(x)
            visit[x] = 1
            cnt += 1

print(cnt)
