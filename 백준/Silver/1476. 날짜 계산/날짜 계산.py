import sys

input = sys.stdin.readline
e, s, m = map(int, input().split())

res = 1;
while True:
    if (res - e) % 15 == 0 and (res - s) % 28 == 0 and (res - m) % 19 == 0:
        print(res)
        break
    res += 1