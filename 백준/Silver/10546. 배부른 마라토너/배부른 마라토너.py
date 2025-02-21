import sys
input = sys.stdin.readline

n = int(input())
ply = {}
for _ in range(n):
    a = input().rstrip()
    if a in ply.keys():
        ply[a] += 1
    else:
        ply[a] = 1

for _ in range(n-1):
    a = input().rstrip()
    ply[a] += 1

for i, j in ply.items():
    if j % 2 == 1:
        print(i)