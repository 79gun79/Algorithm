import sys
input = sys.stdin.readline

n = int(input())

def JinB(x, k):
    if x == 0:
        return 0

    tmp = ''
    while x:
        tmp += str(x % k)
        x //= k

    return tmp[::-1]

flag = True
for i in range(2, 11):
    a = JinB(n, i)
    if a == a[::-1]:
        print(i, a)
        flag = False

if flag:
    print('NIE')