"""
Advent of Code
Day : 3
Problem : 2
"""
from everyday import utils

# Since this isn't absolute path, you need to run this file from within this directory
INPUT_FILE = 'ilana-input.txt'


def valid_triangle(sides):
    biggest = max(sides)
    if biggest >= sum(sides) - biggest:
        return False

    return True


def main():
    input_lines = utils.get_input_lines(INPUT_FILE)

    count = 0
    triangles = []

    one = []
    two = []
    three = []

    for index, line in enumerate(input_lines):
        sides = [int(x) for x in line.split()]

        one.append(sides[0])
        two.append(sides[1])
        three.append(sides[2])

        if len(one) == 3:
            triangles.append(one.copy())
            triangles.append(two.copy())
            triangles.append(three.copy())

            one = []
            two = []
            three = []

    for triangle in triangles:
        valid = False
        if valid_triangle(triangle):
            count += 1
            valid = True

        print("{}: {} - valid:{}".format(index, triangle, valid))

    print("Total invalid: {}".format(count))


if __name__ == '__main__':
    main()
