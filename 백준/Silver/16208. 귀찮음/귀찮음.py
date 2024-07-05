import sys
input = sys.stdin.readline

n = int(input())
a = list(map(int, input().split()))
a.sort()
bar = sum(a)

tmp = 0
for i in range(n):
    bar -= a[i]
    tmp += (bar * a[i])
print(tmp)
