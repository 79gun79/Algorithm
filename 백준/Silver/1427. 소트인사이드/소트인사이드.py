import sys
input = sys.stdin.readline

n = list(map(int, input().rstrip()))
n.sort(reverse=True)
for i in n:
    print(i, end="")