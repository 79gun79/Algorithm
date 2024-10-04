import sys
input = sys.stdin.readline

n = int(input())
visited = [[0 for _ in range(501)] for _ in range(501)]

for j in range(n):
    x1, y1, x2, y2 = map(int, input().split())

    for i in range(x1, x2):
        for j in range(y1, y2):
            visited[i][j] = 1

res = 0
for i in range(501):
    for j in range(501):
        if visited[i][j] == 1:
            res += 1

print(res)