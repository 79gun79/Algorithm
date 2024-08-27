import sys
input = sys.stdin.readline

n = int(input())
std = []
for _ in range(n):
    d, t = map(int, input().split())
    std.append([d, t])

std.sort(key=lambda x:x[1],reverse=True)
tmp = std[0][1]
for i in range(len(std)):
    if std[i][1] > tmp:
        std[i][1] = tmp
    tmp = std[i][1]-std[i][0]

print(tmp)