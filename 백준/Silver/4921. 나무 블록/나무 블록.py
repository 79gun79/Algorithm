import sys
input = sys.stdin.readline

idx = 0
while True:
    c = input().rstrip()
    idx += 1

    if c == '0':
        break

    if len(c) < 1:
        print(f'{idx}. NOT')
        continue

    if len(c) > 10000:
        print(f'{idx}. NOT')
        continue

    if c[0] != '1':
        print(f'{idx}. NOT')
        continue

    if c[-1] != '2':
        print(f'{idx}. NOT')
        continue

    if c[1] not in ['4', '5']:
        print(f'{idx}. NOT')
        continue


    flag = True
    for i in range(1, len(c)-1):
        if c[i] in ['1', '2']:
            flag = False
            break

        if c[i] == '3':
            if c[i+1] not in ['4', '5']:
                flag = False
                continue

        if c[i] == '4':
            if c[i+1] not in ['2', '3']:
                flag = False
                break

        if c[i] == '5':
            if c[i+1] != '8':
                flag = False
                break

        if c[i] == '6':
            if c[i+1] not in ['2', '3']:
                flag = False
                break

        if c[i] == '7':
            if c[i+1] != '8':
                flag = False
                break

        if c[i] == '8':
            if c[i+1] not in ['6', '7']:
                flag = False
                break


    if flag:
        print(f'{idx}. VALID')
    else:
        print(f'{idx}. NOT')

