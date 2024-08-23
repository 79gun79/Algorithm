import sys
input = sys.stdin.readline

n, m = map(int, input().split())
lst = map(int, input().split())
res = {}

for i in lst:
    if i in res.keys():
        res[i] += 1
    else:
        res[i] = 1

print(max(res.values()))
