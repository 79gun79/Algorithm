import sys
input = sys.stdin.readline

def next_word(word, n):
    ch_st = -1
    ch_ed = -1
    for i in range(1, n):
        if word[i-1] < word[i]:
            ch_st = i-1
    if ch_st == -1:
        return word

    for j in range(n-1, ch_st, -1):
        if word[ch_st] < word[j]:
            ch_ed = j
            break

    word[ch_st], word[ch_ed] = word[ch_ed], word[ch_st]
    chg = sorted(word[ch_st+1:])
    res = word[:ch_st+1] + chg
    return res

t = int(input())
for _ in range(t):
    w = list(input().rstrip())
    l = len(w)
    print("".join(next_word(w, l)))
