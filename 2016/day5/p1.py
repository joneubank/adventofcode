"""
Advent of Code
Day : 5
Problem : 1
"""
from everyday import utils


# Since this isn't absolute path, you need to run this file from within this directory
INPUT_FILE = 'input.txt'


def main():
    input_lines = utils.get_input_lines(INPUT_FILE)


    for index, line in enumerate(input_lines):

        print("{}: {}".format(index, line))

    valid_sectors_sum = sum(valid_checksums)


if __name__ == '__main__':
    main()
