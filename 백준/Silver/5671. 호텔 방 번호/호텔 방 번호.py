import sys
input = sys.stdin.readline

while True:
    a = input().strip()
    if not a:
        break
    n, m = map(int, a.split())

    cnt = 0
    for i in range(n, m+1):
        if len(str(i)) == len(set(str(i))):
            cnt += 1

    print(cnt)
