import sys
input = sys.stdin.readline

def No():
    print("NO")
    quit()

l = int(input())
visited = [0] * 10
a = list(map(int, input().split()))

for j in range(l):
    prev = a[j-1]
    i = a[j]
    if visited[i] == 1:
        No()
    visited[i] = 1
    if j == 0:
        continue

    if visited[2] == 0:
        if (prev+i) == 4:
            No()
    if visited[4] == 0:
        if (prev == 1 and i == 7) | (prev == 7 and i == 1):
            No()
    if visited[5] == 0:
        if (prev+i) == 10:
            No()
    if visited[6] == 0:
        if (prev == 3 and i == 9) | (prev == 9 and i == 3):
            No()
    if visited[8] == 0:
        if (prev+i) == 16:
            No()

print("YES")
