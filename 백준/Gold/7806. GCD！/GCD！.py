def index_check_num(a):
    num = a
    count = 0
    while num <= n:
        count += n // num
        num *= a
    return count


try:
    while True:
        n, k = map(int, input().split())

        if n == 0:
            n = 1

        arr = []  
        x = k
        for i in range(2, k + 1):
            if i * i > k:
                break
            while x % i == 0:
                arr.append(i)
                x //= i
        if x != 1:
            arr.append(x)

        temp = set(arr)
        result = 1 
        for i in temp:
            if index_check_num(i) != 0:
                num = min(index_check_num(i), arr.count(i))
                result *= (i ** num)
        print(result)
except EOFError:
    exit()