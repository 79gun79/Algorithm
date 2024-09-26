import sys
input = sys.stdin.readline
chess = [input().rstrip() for _ in range(8)]
mv = [(1,0),(0,1),(-1,0),(0,-1),(1,1),(1,-1),(-1,-1),(-1,1)]

def Queen(x, y):
    for m in range(8):
        dx = x
        dy = y
        for _ in range(7):
            dx += mv[m][0]
            dy += mv[m][1]
            if dx > 7 or dy > 7:
                break
            if dx < 0 or dy < 0:
                break
            if chess[dx][dy] == '*':
                return True
    return False

cnt = 0
for i in range(8):
    for j in range(8):
        if chess[i][j] == '*':
            cnt += 1
            if Queen(i, j):
                print('invalid')
                quit()

if cnt == 8:
    print('valid')
else:
    print('invalid')



