import sys
input = sys.stdin.readline
n = int(input())
mp = [list(map(int, input().split())) for _ in range(n)]
dp = [[[0 for _ in range(3)] for _ in range(n)] for _ in range(n)]

dp[0][1][0] = 1 # 시작 파이프(가로)
for i in range(2, n):
    if mp[0][i] == 0:
        dp[0][i][0] = dp[0][i-1][0] # 1번 줄 (가로) 세팅
        
for x in range(1, n):
    for y in range(1, n):
        if mp[x][y] == 0: # 지금 있는 칸만 빈칸이면 됨
            dp[x][y][0] = dp[x][y-1][0] + dp[x][y-1][2]
            # 가로 파이프: 왼쪽 파이프가 가로 or 대각선
            dp[x][y][1] = dp[x-1][y][1] + dp[x-1][y][2]
            # 세로 파이프: 위쪽 파이프가 세로 or 대각선
        if mp[x][y] == 0 and mp[x-1][y] == 0 and mp[x][y-1] == 0: # 지금 있는 칸과 그 위와 왼쪽이 모두 빈칸이어야 함
            dp[x][y][2] = dp[x-1][y-1][0] + dp[x-1][y-1][1] + dp[x-1][y-1][2]
            # 대각선 파이프: 왼쪽위 파이프가 세로, 대각선, 가로 다 됨

print(sum(dp[n-1][n-1]))