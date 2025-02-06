import sys
input = sys.stdin.readline

def recursion(x, y, size):
    if size == 3:
        star[x][y] = '*'
        star[x + 1][y - 1] = '*'
        star[x + 1][y + 1] = '*'
        star[x + 2][y - 2] = '*'
        star[x + 2][y - 1] = '*'
        star[x + 2][y] = '*'
        star[x + 2][y + 1] = '*'
        star[x + 2][y + 2] = '*'
    else:
        size //= 2
        recursion(x, y, size)
        recursion(x + size, y - size, size)
        recursion(x + size, y + size, size)

n = int(input())
star = [[' '] * 2 * n for _ in range(n)]
recursion(0, n-1, n)
for i in star:
    print("".join(i))