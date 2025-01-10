import sys
input = sys.stdin.readline

n, m = map(int, input().split())
jewel = []
jealous = 0

for _ in range(m):
    jewel.append(int(input()))

l = 1
r = max(jewel)

while l <= r:
    m = (l+r) // 2
    sum = 0
    for i in jewel:
        sum += (i // m)
        if (i % m) != 0:
            sum += 1

    if sum > n:
        l = m + 1

    else:
        r = m - 1
        jealous = m

print(jealous)