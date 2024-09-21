import sys
input = sys.stdin.readline

n, m = map(int, input().split())
tr = set(list(map(int, input().split()))[1:])
if tr == 0:
    print(m)
    quit()

parties = [set(list(map(int, input().split()))[1:]) for _ in range(m)]

for _ in range(m):
    for p in parties:
        if p & tr:
            tr = p | tr

for t in parties:
    if t & tr:
        m -= 1

print(m)