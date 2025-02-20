import sys
input = sys.stdin.readline

mod = 1000000007
m = int(input())

def perma(x):
    if x == 1:
        return n
    v = perma(x // 2)
    if x % 2 == 0:
        return v * v % mod
    else:
        return v * v * n % mod

res = 0
for _ in range(m):
    n, s = map(int, input().split())
    hap = perma(mod-2)
    res += hap * s % mod
    res %= mod

print(res)