import sys
input = sys.stdin.readline

n, x, y = map(int, input().split())
a = list(map(int, input().split()))

b = [0] * n
for i in range(n):
    b[i] = (a[i] // x)

c = [0] * n
for j in range(n):
    if a[j] in range(b[j] * x, b[j] * y + 1):
        c[j] = 0
    else:
        c[j] = (a[j] % y)

print(sum(b))
print(sum(c))