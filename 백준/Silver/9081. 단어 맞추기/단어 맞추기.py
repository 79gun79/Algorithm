import sys
input = sys.stdin.readline

def next_word(word, n):
    a = -1
    b = -1

    for i in range(1, n):
        if word[i-1] < word[i]:
            a = i-1

    if a == -1:
        return word

    for j in range(n-1, a, -1):
        if word[a] < word[j]:
            b = j
            break


    word[a], word[b] = word[b], word[a]
    tmp = word[:a+1]
    emp = sorted(reversed(word[a+1:]))
    tmp += emp

    return tmp

t = int(input())
for _ in range(t):
    s = list(input().rstrip())
    print("".join(next_word(s, len(s))))
