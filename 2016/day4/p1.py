"""
Advent of Code
Day : 4
Problem : 1
"""
from everyday import utils

# Since this isn't absolute path, you need to run this file from within this directory
INPUT_FILE = 'ilana-input.txt'


def main():
    input_lines = utils.get_input_lines(INPUT_FILE)

    for index, line in enumerate(input_lines):

        print("{}: {}".format(index, line, valid))


if __name__ == '__main__':
    main()
