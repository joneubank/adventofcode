"""
Advent of Code
Day : 5
Problem : 1
"""
from everyday import utils

from hashlib import md5

# Since this isn't absolute path, you need to run this file from within this directory

INPUT_CODE = 'abbhdwsy'


def generate_hash(key):
    return md5(str(key).encode('utf-8')).hexdigest()

def main():

    index = 0
    password = 'xxxxxxxx'

    while 'x' in password:

        test_hash = generate_hash(INPUT_CODE + str(index))
        if test_hash[:5] == '00000':
            try:
                pos = int(test_hash[5])
            except Exception as e:
                pass
            else:
                if pos < 8 and password[pos] == 'x':
                    password = '{}{}{}'.format(password[:pos],test_hash[6],password[pos+1:])
                print("{}: {} - Password: {}".format(index, test_hash, password))
        if index % 100000 == 0:
            print(index)
        index += 1


if __name__ == '__main__':
    main()
