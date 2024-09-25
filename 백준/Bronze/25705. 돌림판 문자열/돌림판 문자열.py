import sys
input = sys.stdin.readline

n = int(input())
t = input().rstrip()
m = int(input())
s = input().rstrip()

cnt, j = 0, 0
br_cnt = 0
sr = ''
while True:
    cnt += 1
    br_cnt += 1
    i = (cnt-1) % n
    if t[i] == s[j]:
        br_cnt = 0
        sr += t[i]
        j += 1

    if br_cnt > n:
        print(-1)
        break

    if sr == s:
        print(cnt)
        break