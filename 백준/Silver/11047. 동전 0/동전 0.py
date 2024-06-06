import sys
input = sys.stdin.readline

coin = []
n, k = map(int, input().split())
for _ in range(n):
    coin.append(int(input()))

coin.sort(reverse=True)

cnt = 0
for i in range(n):
    if coin[i] <= k:
        tmp = (k // coin[i])
        k %= coin[i]
        cnt += tmp

        if k <= 0:
            break

print(cnt)