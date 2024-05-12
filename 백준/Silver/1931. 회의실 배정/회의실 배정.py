import sys
input = sys.stdin.readline

n = int(input())
mt = []
for _ in range(n):
    s, e = map(int, input().split())
    mt.append((s,e))
mt.sort(key=lambda x: (x[1], x[0]))

last_end = 0
mx = 0

for i, j in mt:
    if last_end <= i:
        mx += 1
        last_end = j
print(mx)
