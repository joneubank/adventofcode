'''
Advent of Code : Day 4
Problem : 2

Now find one that starts with six zeroes.

'''
from hashlib import md5


def generate_hash(key):
    return md5(str(key).encode('utf-8')).hexdigest()


def problem(key):
    candidate = 1
    while True:
        h = generate_hash(key+str(candidate))
        # print(str(candidate) + " : " + str(h)
        if h[0:6] == "000000":
            print(str(candidate))
            print(h)
            break
        elif candidate % 10000 == 0:
            print(candidate)

        if candidate > 10000000:
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
