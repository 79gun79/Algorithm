import sys
input = sys.stdin.readline

s = list(input().rstrip())
e = input().rstrip()
l = len(e)
stk = []

for i in s:
    stk.append(i)
    if ''.join(stk[-l:]) == e:
        for _ in range(l):
            stk.pop()

if len(stk) == 0:
    print('FRULA')
else:
    print(''.join(stk))