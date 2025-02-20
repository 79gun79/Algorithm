import sys
input = sys.stdin.readline

def binary_search_start(goal):
    st, ed = 0, n-1
    while st <= ed:
        mid = (st+ed) // 2
        if pos[mid] < goal:
            st = mid + 1
        else:
            ed = mid - 1
    return st

def binary_search_end(goal):
    st, ed = 0, n-1
    while st <= ed:
        mid = (st+ed) // 2
        if pos[mid] <= goal:
            st = mid + 1
        else:
            ed = mid - 1
    return st

n, m = map(int, input().split())
pos = list(map(int, input().split()))
pos.sort()

for _ in range(m):
    s, e = map(int, input().split())
    start = binary_search_start(s)
    end = binary_search_end(e)
    print(end-start)