import sys
inp = sys.stdin.readline

n = int(inp().strip())
pos = 0

while n > 0:
    pos = 0
    for i in range(1, 5):
        for _ in range(0, i):
            n -= 5
            if n <= 0:
                pos += (n+5)
                break
            pos += 5
        if n <= 0:
            break

        for _ in range(0, i):
            n -= 5
            if n <= 0:
                pos -= (n+5)
                break
            pos -= 5
        if n <= 0:
            break

if (pos % 5) == 0:
    print(pos // 5)
else:
    print(pos // 5 + 1)