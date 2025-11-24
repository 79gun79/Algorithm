import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n = int(input())
    l = list(map(int, input().split()))
    l.sort()
    
    res = 0
    for i in range(n-2):
        res = max(res, l[i+2] - l[i])
    res = max(res, l[n-1] - l[n-2])
    
    print(res)