lst = ['a', 'e', 'i', 'o', 'u']

s = input().rstrip()
res = 0
for i in s:
    if i in lst:
        res += 1
print(res)