import sys
input = sys.stdin.readline

def binary_search(lst):
    l = 1
    r = max(lst)
    jealous = 0

    while l <= r:
        mid = (l + r) // 2
        cnt = 0
        for i in jewel:
            cnt += i // mid
            if i % mid != 0:
                cnt += 1

        if cnt <= n:
            r = mid - 1
            jealous = mid
        else:
            l = mid + 1


    return jealous

n, m = map(int, input().split())
jewel = [int(input()) for _ in range(m)]
print(binary_search(jewel))