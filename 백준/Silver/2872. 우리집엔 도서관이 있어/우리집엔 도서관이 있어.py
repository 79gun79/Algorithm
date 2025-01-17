import sys
input = sys.stdin.readline

n = int(input())
book = [int(input()) for _ in range(n)]

res = n
for i in range(n-1, -1, -1):
    if book[i] == res:
        res -= 1

print(res)