import sys
input = sys.stdin.readline

n = int(input())
std = []
for _ in range(n):
    d, t = map(int, input().split())
    std.append([d, t])

std.sort(key=lambda x:x[1],reverse=True)
res = 1000000000
for i in range(len(std)):
    if std[i][1] > res:
        std[i][1] = res
    res = std[i][1]-std[i][0]

print(res)