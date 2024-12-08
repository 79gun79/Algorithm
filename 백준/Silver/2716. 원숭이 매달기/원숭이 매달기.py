import sys
input = sys.stdin.readline

def solution(tr):
    cnt = 0
    res = 0
    if tr == '':
        return 1
    for i in tr:
        if i == '[':
            cnt += 1
            res = max(res, cnt)
        elif i == ']':
            cnt -= 1

    return 2 ** res

n = int(input())
for _ in range(n):
    t = input().rstrip()
    print(solution(t))