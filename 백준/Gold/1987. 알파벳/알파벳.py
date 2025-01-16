import sys
input = sys.stdin.readline
dx = [-1, 1, 0, 0]
dy = [0, 0, 1, -1]

def dfs(x, y, cnt):
    global res
    res = max(res, cnt)
    for i in range(4):
        nx = dx[i] + x
        ny = dy[i] + y

        if nx < 0 or nx >= r or ny < 0 or ny >= c:
            continue

        if visited[ord(board[nx][ny]) - 65] == 0:
            visited[ord(board[nx][ny]) - 65] = 1
            dfs(nx, ny, cnt+1)
            visited[ord(board[nx][ny]) - 65] = 0


r, c = map(int, input().split())
board = [list(input().rstrip()) for _ in range(r)]
visited = [0] * 26
visited[ord(board[0][0]) - 65] = 1

res = 1
dfs(0, 0, 1)
print(res)
