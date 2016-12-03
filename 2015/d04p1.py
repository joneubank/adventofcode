'''
Advent of Code : Day 4
Problem : 1

No Input

Santa needs help mining some AdventCoins (very similar to bitcoins) to use
as gifts for all the economically forward-thinking little girls and boys.

To do this, he needs to find MD5 hashes which, in hexadecimal, start with at
least five zeroes. The input to the MD5 hash is some secret key (your puzzle
    input, given below) followed by a number in decimal. To mine AdventCoins,
you must find Santa the lowest positive number (no leading zeroes: 1, 2, 3,
    ...) that produces such a hash.

For example:

If your secret key is abcdef, the answer is 609043, because the MD5 hash of
abcdef609043 starts with five zeroes (000001dbbfa...), and it is the lowest
such number to do so.
If your secret key is pqrstuv, the lowest number it combines with to make an
MD5 hash starting with five zeroes is 1048970; that is, the MD5 hash of
pqrstuv1048970 looks like 000006136ef....

Your puzzle input is ckczppom.
'''
from hashlib import md5


def generate_hash(key):
    return md5(str(key).encode('utf-8')).hexdigest()


def problem(key):
    candidate = 1
    while True:
        h = generate_hash(key+str(candidate))
        if h[0:5] == "00000":
            print(str(candidate))
            print(h)
            break
        elif candidate % 100 == 0:
            print(candidate)

        if candidate > 1000000:
            break
        candidate += 1

    return candidate


'''
returns True if the input generates a hash that starts with 00000
'''
def test_key(input):
    return generate_hash(input)[0:5] == "00000"


def testMain():
    print("Running Test Cases\n")
    test_in = ["pqrstuv1048970", "abcdef609043"]

    all_pass = True
    for test in test_in:
        result = test_key(test)
        print(str(result) + " : " + test)
        if not result:
            all_pass = False

    print("")

    return all_pass

if __name__ == '__main__':
    # print("All Tests Pass: " + str(testMain()))
    input_val = "ckczppom"
    print("Answer: " + str(problem(input_val)))
