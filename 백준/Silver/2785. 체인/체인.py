import sys
input = sys.stdin.readline

n = int(input())
lst = list(map(int, input().split()))
lst.sort()

tied = 1
for l in lst:
    if tied + l >= n:
        break
    else:
        tied += l
        n -= 1
print(n-1)