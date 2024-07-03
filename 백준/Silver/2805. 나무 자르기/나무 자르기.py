import sys
input = sys.stdin.readline

n, m = map(int, input().split())
h = list(map(int, input().split()))
s = 1
e = sum(h)

while s <= e:
    mid = (s+e) // 2
    pnt = 0

    for i in h:
        if i > mid:
            pnt += (i - mid)

    if pnt >= m:
        s = mid + 1
    else:
        e = mid - 1

print(e)