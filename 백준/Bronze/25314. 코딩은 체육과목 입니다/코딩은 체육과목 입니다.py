import sys
input = sys.stdin.readline

N = int(input())
c = N // 4
if N % 4 != 0:
    c += 1

for _ in range(c):
    print('long', end=" ")
print('int')