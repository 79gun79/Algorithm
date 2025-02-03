import sys
input = sys.stdin.readline

n, q = map(int, input().split())
a = list(map(int, input().split()))
num = [0] * 300001

a.sort()
for i in range(1, n+1):
    num[i] = num[i-1] + a[i-1]
for _ in range(q):
    l, r = map(int, input().split())
    print(num[r] - num[l-1])