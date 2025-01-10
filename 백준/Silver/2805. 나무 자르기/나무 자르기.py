import sys
input = sys.stdin.readline

def binary_search(lst):
    l = 1
    r = sum(lst)
    res = 0
    while l <= r:
        mid = (l + r) // 2
        h = 0
        for i in lst:
            if i > mid:
                h += (i - mid)

        if h >= m:
            res = mid
            l = mid + 1
        else:
            r = mid - 1

    return res

n, m = map(int, input().split())
tr = list(map(int, input().split()))
print(binary_search(tr))