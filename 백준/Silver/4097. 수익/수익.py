import sys
input = sys.stdin.readline

while True:
    n = int(input())
    if n == 0:
        break

    lst = []
    for _ in range(n):
        lst.append(int(input()))

    for i in range(1, n):
        lst[i] = max(lst[i-1] + lst[i], lst[i])

    print(max(lst))

