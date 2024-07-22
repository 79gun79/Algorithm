import sys
input = sys.stdin.readline

n, m = map(int, input().split())
dogam = []
for _ in range(n):
    dogam.append(input().strip('\n'))

for _ in range(m):
    s = input().strip('\n')

    if not s.isdigit():
        print(dogam.index(s) + 1)
    else:
        print(dogam[int(s)-1])
