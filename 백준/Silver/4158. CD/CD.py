import sys
input = sys.stdin.readline

while True:
    n, m = map(int, input().split())
    if n == 0 and m == 0:
        break
    num_a = []
    for _ in range(n):
        num_a.append(int(input()))
    num_b = []
    for _ in range(m):
        num_b.append(int(input()))

    lst = num_a + num_b
    lst2 = list(set(lst))

    print(len(lst) - len(lst2))
