import sys
input = sys.stdin.readline

idx = 0
namu = {'3': ['4', '5'], '4': ['2', '3'], '5': ['8'], '6': ['2', '3'], '7': ['8'], '8': ['6', '7']}
while True:
    idx += 1
    a = input().rstrip()
    if a == '0':
        break

    if a[0] != '1':
        print(f'{idx}. NOT')
        continue
    if a[-1] != '2':
        print(f'{idx}. NOT')
        continue
    if a[1] not in ['4', '5']:
        print(f'{idx}. NOT')
        continue


    flag = True
    for i in range(1, len(a)-1):
        if a[i] not in namu.keys():
            flag = False
            break
        else:
            if a[i+1] not in namu[a[i]]:
                flag = False
                break

    if flag:
        print(f'{idx}. VALID')
    else:
        print(f'{idx}. NOT')
