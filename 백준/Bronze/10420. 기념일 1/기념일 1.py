import sys
input = sys.stdin.readline

n = int(input())
y = 2014
m = 4
d = 1

days_in = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

while n > 0:
    if (y % 400 == 0) or (y % 4 == 0 and y % 100 != 0):
        days_in[1] = 29
    else:
        days_in[1] = 28

    if n >= days_in[m-1] - (d-1):
        n -= days_in[m - 1] - (d - 1)
        d = 1
        m += 1
        if m > 12:
            m = 1
            y += 1
    else:
        d += n
        n = 0

print(f"{y}-{m:02d}-{d:02d}")