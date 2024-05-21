import sys
input = sys.stdin.readline

n = int(input())

men = []
for _ in range(n):
    a, b = input().split()
    men.append((a,b))

men.sort(key=lambda x: x[1], reverse=True)
men.sort(key=lambda x: x[0])


for j in men:
    print(j[0], j[1])

