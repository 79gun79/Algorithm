import sys
input = sys.stdin.readline
from collections import deque

N, L = map(int, input().split())
A = list(map(int, input().split()))
mn = deque()

for i in range(N):

    while mn and mn[-1][1] >= A[i]:
        mn.pop()

    mn.append((i, A[i]))

    if mn[0][0] < i - L + 1:
        mn.popleft()

    print(mn[0][1], end=" ")

