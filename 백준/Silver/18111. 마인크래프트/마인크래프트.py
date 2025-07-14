import sys
input = sys.stdin.readline

block = []
n, m, b = map(int, input().split())
for _ in range(n):
    block.append(list(map(int, input().split())))

time = sys.maxsize
height = 0

for h in range(257):
    remove_block = 0
    add_block = 0
    for i in range(n):
        for j in range(m):
            if block[i][j] > h:
                remove_block += (block[i][j] - h)
            else:
                add_block += (h - block[i][j])

    if add_block > remove_block + b:
        continue

    t = (2 * remove_block) + add_block

    if t <= time:
        time = t
        height = h

print(time, height)