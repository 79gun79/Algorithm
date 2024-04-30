import sys
input = sys.stdin.readline

n = int(input())
inp = list(input().strip('\n'))
arr = []
tmp_lst = ''
for x in range(n):
    tmp_lst += inp[x]
    if (x % (n//5)) == n//5 - 1:
        arr.append(tmp_lst)
        tmp_lst = ''
arr = list(zip(*arr))
sig = []
for y in arr:
    sig.append(''.join(y))

zero = '######...######'
one = '#####'
two = '#.####.#.####.#'
three = '#.#.##.#.######'
four = '###....#..#####'
five = '###.##.#.##.###'
six = '######.#.##.###'
seven = '#....#....#####'
eight = '######.#.######'
nine = '###.##.#.######'
blk = '.....'

tmp = ''
res = ''
for i in range(n//5):
    tmp += ''.join(sig[i])
    if tmp == zero:
        res += '0'
        tmp = ''
    elif tmp == one:
        if i == (n//5) - 1:
            res += '1'
            tmp = ''
        else:
            if ''.join(sig[i+1]) == blk:
                res += '1'
                tmp = ''
    elif tmp == two:
        res += '2'
        tmp = ''
    elif tmp == three:
        res += '3'
        tmp = ''
    elif tmp == four:
        res += '4'
        tmp = ''
    elif tmp == five:
        res += '5'
        tmp = ''
    elif tmp == six:
        res += '6'
        tmp = ''
    elif tmp == seven:
        res += '7'
        tmp = ''
    elif tmp == eight:
        res += '8'
        tmp = ''
    elif tmp == nine:
        res += '9'
        tmp = ''
    elif tmp == blk:
        tmp = ''

for i in res:
    print(int(i), end="")
