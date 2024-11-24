import sys
input = sys.stdin.readline

n = int(input())
mp = []
for _ in range(n):
    mp.append(list(map(int, input().split())))

for i in range(1, n):
    for j in range(i+1):
        if j == 0:
            mp[i][j] += mp[i-1][j]
        elif j == i:
            mp[i][j] += mp[i-1][j-1]
        else:
            mp[i][j] += max(mp[i-1][j-1], mp[i-1][j])

print(max(mp[n-1]))
