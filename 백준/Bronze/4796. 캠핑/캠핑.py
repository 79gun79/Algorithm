import sys
input = sys.stdin.readline

idx = 0
while True:
    l, p, v = map(int, input().split())
    idx += 1
    if l == 0:
        break

    res = 0
    while v > 0:
        if v > l:
            res += l
            v -= p
        else:
            res += v
            v = 0
    print(f'Case {idx}: {res}')