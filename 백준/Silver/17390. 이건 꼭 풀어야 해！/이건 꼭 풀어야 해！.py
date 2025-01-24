import sys
input = sys.stdin.readline

n, q = map(int, input().split())
a = list(map(int, input().split()))
b = sorted(a)

num = [0] * (300001)
for i in range(1, n+1):
    num[i] = num[i-1] + b[i-1]
for i in range(q):
    l, r = map(int, input().split())
    print(num[r] - num[l-1])