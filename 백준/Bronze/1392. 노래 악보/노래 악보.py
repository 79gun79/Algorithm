import sys
input = sys.stdin.readline

n, q = map(int, input().split())
sheet = [int(input()) for _ in range(n)]
ans = []
i = 1
for s in sheet:
    for _ in range(s):
        ans.append(i)
    i += 1

for _ in range(q):
    j = int(input())
    print(ans[j])