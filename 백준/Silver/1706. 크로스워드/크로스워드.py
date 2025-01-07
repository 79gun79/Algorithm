import sys
input = sys.stdin.readline

r, c = map(int, input().split())

row = []
for _ in range(r):
    row.append(input().rstrip())

col = list(map(list, zip(*row)))
for i in range(c):
    col[i] = "".join(col[i])

puz = row + col
puzzle = []
for j in range(len(puz)):
    a = puz[j].split('#')
    for k in a:
        if len(k) < 2:
            continue
        else:
            puzzle.append(k)

puzzle.sort()
print(puzzle[0])
