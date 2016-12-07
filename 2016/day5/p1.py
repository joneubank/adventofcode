"""
Advent of Code
Day : 5
Problem : 1
"""
from everyday import utils

from hashlib import md5

INPUT_CODE = 'abbhdwsy'


def generate_hash(key):
    return md5(str(key).encode('utf-8')).hexdigest()

def main():

    index = 0
    password = ''

    while len(password) < 8:

        test_hash = generate_hash(INPUT_CODE + str(index))
        if test_hash[:5] == '00000':
            password += str(test_hash[5])
            print("{}: {} - Password: {}".format(index, test_hash, password))
            if index % 100000 == 0:
                print(index)
        index += 1


if __name__ == '__main__':
    main()
