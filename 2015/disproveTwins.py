import math

primes = [2]
max_test = 100000L

def is_prime(num):
    # Do a check for even off the top, since this check is missed in loop below
    if(num % 2 == 0):
        return False
    testMax = int(math.sqrt(num))+1
    for x in range(3, testMax, 1):
        if num % x == 0:
            return False
    return True

def get_factors(num):
    out = set([1, num])

    interval = 2
    if num % 2 == 0:
        interval = 1
        out.add(2)
        out.add(num/2)

    test_max = int(math.sqrt(num)) + 1
    for i in range(3, test_max, interval):
        if num % i == 0:
            out.add(i)
            out.add(num/i)

    return out

def prodlist(list):
    out = 1
    for x in list:
        out *= x

    return out

def main():
    for i in range(3, max_test, 2):
        if is_prime(i):
            primes.append(i)

            test_num = sum(primes)
            high = test_num + 1
            low = test_num - 1

            high_pass = is_prime(high)
            low_pass = is_prime(low)

            if high_pass and low_pass:
                print("%d : %d BOTH" % (i, test_num))
            elif high_pass:
                print("%d : %d HIGH" % (i, test_num))
            elif low_pass:
                print("%d : %d LOW" % (i, test_num))
            else:
                print("%d : %d" % (i, test_num))

if __name__ == '__main__':
    main()

