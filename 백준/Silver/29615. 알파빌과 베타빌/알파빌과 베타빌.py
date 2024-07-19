import sys
input = sys.stdin.readline

n, m = map(int, input().split())
num = list(map(int, input().split()))
wait = list(map(int, input().split()))

fixed_num = 0
for i in range(m):
    for j in range(m):
        if num[i] == wait[j]:
            fixed_num += 1

print(m - fixed_num)