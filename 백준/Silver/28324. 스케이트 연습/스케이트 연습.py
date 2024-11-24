import sys
input = sys.stdin.readline

n = int(input())
v = list(map(int, input().split()))

v = v[::-1]
cnt = 0
res = 0
for i in range(n):
    if v[i] > cnt:
        cnt += 1
    else:
        cnt = v[i]
    res += cnt
print(res)

