import sys
input = sys.stdin.readline

n = int(input())
mt = []
for _ in range(n):
    st, ed = map(int, input().split())
    mt.append((st, ed))
mt.sort(key=lambda x: (x[1], x[0]))

last_end = 0
cnt = 0

for i, j in mt:
    if last_end <= i:
        cnt += 1
        last_end = j
print(cnt)
