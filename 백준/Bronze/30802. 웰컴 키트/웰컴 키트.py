import sys
input = sys.stdin.readline

n = int(input())
size = list(map(int, input().split()))
t, p = map(int, input().split())

for i in range(6):
    if size[i] % t == 0:
        size[i] //= t
    else:
        size[i] //= t
        size[i] += 1

print(sum(size))
print(n // p, n % p)