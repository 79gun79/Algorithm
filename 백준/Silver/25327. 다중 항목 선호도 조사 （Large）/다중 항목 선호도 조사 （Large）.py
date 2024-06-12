import sys
input = sys.stdin.readline

n, m = map(int, input().split())
subject = ['kor', 'eng', 'math']
fruit = ['apple', 'pear', 'orange']
color = ['red', 'blue', 'green']
cnt = {}

for i in subject:
    for j in fruit:
        for k in color:
            cnt[(i, j, k)] = 0

for _ in range(n):
    s, f, c = input().split()
    cnt[(s, f, c)] += 1

for _ in range(m):
    si, fi, ci = input().split()
    res = 0
    if si == '-':
        si = subject
    else:
        si = [si]

    if fi == '-':
        fi = fruit
    else:
        fi = [fi]

    if ci == '-':
        ci = color
    else:
        ci = [ci]

    for i in si:
        for j in fi:
            for k in ci:
                res += cnt[(i, j, k)]

    print(res)