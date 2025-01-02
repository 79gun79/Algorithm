import sys
input = sys.stdin.readline

n, k = map(int, input().split())
a = list(map(int, input().split()))

ed = 0
res = 0
rmv = 0
tmp = 0

for i in range(n):
    while rmv <= k and ed < n:
        if a[ed] % 2:
            rmv += 1
        else:
            tmp += 1
        ed += 1

        if i == 0 and ed == n:
            res = tmp
            break

    if rmv == k+1:
        res = max(tmp, res)
    if a[i] % 2:
        rmv -= 1
    else:
        tmp -= 1
print(res)