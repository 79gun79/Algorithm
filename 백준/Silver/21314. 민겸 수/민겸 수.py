import sys
input = sys.stdin.readline

N = str(input().strip('\n'))
maxk = ''
mink = ''
tmp = 0

for i in N:
    if i == 'M':
        tmp += 1
    else:
        if tmp > 0:
            maxk += '5'
            maxk += '0' * (tmp)
            mink += '1'
            mink += '0' * (tmp-1)
            mink += '5'
            tmp = 0
        else:
            maxk += '5'
            mink += '5'
if tmp > 0:
    maxk += '1' * tmp
    mink += '1'
    mink += '0' * (tmp - 1)


print(maxk)
print(mink)

