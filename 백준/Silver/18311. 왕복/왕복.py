import sys
input = sys.stdin.readline

n, k = map(int, input().split())
a = list(map(int, input().split()))

w = 0
i = 0
for x in range(n):
    w = (x + 1)
    i += a[x]
    if i > k:
        print(w)
        quit()
for y in range(n - 1, -1, -1):
    w = (y + 1)
    i += a[y]
    if i > k:
        print(w)
        quit()

if i < (2*sum(a)):
    print(w)
