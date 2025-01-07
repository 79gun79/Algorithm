import sys
input = sys.stdin.readline

t = 0
while True:
    t += 1
    s = input().rstrip()
    if '-' in s:
        break

    st = ''
    for i in s:
        if i == '{':
            st += '{'
        elif i == '}':
            if len(st) > 0 and st[-1] == '{':
                st = st[:-1]
            else:
                st += '}'

    n = len(st)
    res = 0
    for j in range(0, n, 2):
        if st[j] == st[j+1]:
            res += 1
        else:
            res += 2

    print(f'{t}. {res}')

