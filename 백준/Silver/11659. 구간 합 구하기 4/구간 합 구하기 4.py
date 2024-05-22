import sys
input = sys.stdin.readline

n, m = map(int, input().split())
num = [0] + list(map(int, input().split()))
sm = [0]
hap = 0

for a in range(1, n+1):
    hap += num[a]
    sm.append(hap)

for _ in range(m):
    i, j = map(int, input().split())
    print(sm[j]-sm[i-1])
