"""
Advent of Code
Day : 3
Problem : 1
"""
from everyday import utils

# Since this isn't absolute path, you need to run this file from within this directory
INPUT_FILE = 'input.txt'


def valid_triangle(sides):
    biggest = max(sides)
    if biggest >= sum(sides) - biggest:
        return False

    return True


def main():
    input_lines = utils.get_input_lines(INPUT_FILE)

    count = 0

    for index, line in enumerate(input_lines):
        valid = False
        sides = [int(x) for x in line.split()]

        if valid_triangle(sides):
            count += 1
            valid = True

        print("{}: {} - valid:{}".format(index, line, valid))

    print("Total invalid: {}".format(count))


if __name__ == '__main__':
    main()
