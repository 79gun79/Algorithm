import sys
input = sys.stdin.readline

mp = list(input().rstrip() for _ in range(5))
mp = list(map(list, zip(*mp)))
mp2 = []
for i in mp:
    i = ''.join(i)
    if i == '.omln':
        mp2.append('owln.')
    elif i == 'owln.':
        mp2.append('.omln')
    else:
        mp2.append(i)

mp2 = list(map(list, zip(*mp2)))
for j in mp2:
    print(''.join(j))