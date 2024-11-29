import sys
input = sys.stdin.readline
n = int(input())
num = [int(input()) for _ in range(n)]

minus = []
plus = []
res = 0

for i in num:
    if i <= 0:
        minus.append(i)
    elif i == 1:
        res += 1
    else:
        plus.append(i)

plus.sort(reverse=True)
minus.sort()

for j in range(0, len(plus), 2):
    if j+1 >= len(plus):
        res += plus[j]
    else:
        res += plus[j] * plus[j+1]

for k in range(0, len(minus), 2):
    if k+1 >= len(minus):
        res += minus[k]
    else:
        res += minus[k] * minus[k+1]

print(res)
