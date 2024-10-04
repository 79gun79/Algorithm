import sys
input = sys.stdin.readline

n = int(input())
li = list(map(int, input().split()))

if n == 1:
    print('권병장님, 중대장님이 찾으십니다')
    quit()
st = list(map(int, input().split()))

mx = 0
for i in range(n-1):
    if mx < li[i] + st[i]:
        mx = li[i] + st[i]
    if mx < li[i+1]:
        print('엄마 나 전역 늦어질 것 같아')
        quit()

print('권병장님, 중대장님이 찾으십니다')