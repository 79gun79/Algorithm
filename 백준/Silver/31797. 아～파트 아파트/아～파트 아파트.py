import sys
input = sys.stdin.readline

n, m = map(int, input().split())
p = [0] * 10001

for i in range(m):
    h1, h2 = map(int, input().split())
    p[h1] = i+1
    p[h2] = i+1

if n > 2*m:
    n %= (2*m)
    if n % (2*m) == 0:
        n = (2*m)

res = 1
for j in range(10001):
    if p[j] != 0:
        if res == n:
            print(p[j])
            break
        else:
            res += 1
