import sys
input = sys.stdin.readline
m = int(input())
all_sum = 0
all_xor = 0
for _ in range(m):
    a = list(map(int, input().split()))
    if a[0] == 1:
        all_sum += a[1]
        all_xor ^= a[1]
    elif a[0] == 2:
        all_sum -= a[1]
        all_xor ^= a[1]
    elif a[0] == 3:
        print(all_sum)
    elif a[0] == 4:
        print(all_xor)