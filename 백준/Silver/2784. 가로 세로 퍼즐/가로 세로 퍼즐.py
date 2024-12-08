import sys
input = sys.stdin.readline
from itertools import permutations

word_list = [input().rstrip() for _ in range(6)]
word_list.sort()

def solution(dt):
    for r in list(permutations(dt, 3)):
        tmp = ''.join(r)
        tp1 = tmp[0] + tmp[3] + tmp[6]
        tp2 = tmp[1] + tmp[4] + tmp[7]
        tp3 = tmp[2] + tmp[5] + tmp[8]
        a = [tmp[:3], tmp[3:6], tmp[6:], tp1, tp2, tp3]
        a.sort()
        
        if a == dt:
            print(tmp[:3])
            print(tmp[3:6])
            print(tmp[6:])
            return

    return print(0)

solution(word_list)
