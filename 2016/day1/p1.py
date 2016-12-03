"""
Advent of Code
Day : 1
Problem : 1
"""
from everyday import utils

# Since this isn't absolute path, you need to run this file from within this directory
INPUT_FILE = 'input.txt'

# patter for turns. R moves one to the right, L moves one to the left. Loop at end
direction_mods = [(0,1), (1,0), (0,-1), (-1,0)]
direction_names = ["NORTH", "EAST", "SOUTH", "WEST"]


def next_direction_index(current_index, turn_direction):
    if turn_direction == 'R':
        direction = 1
    elif turn_direction == 'L':
        direction = -1
    else:
        print("BIG PROBLEM: BAD INPUT OR PARSING. TURN DIRECTION WAS: {}".format(turn_direction))

    next_index = current_index + direction
    if next_index < 0:
        next_index = 3
    if next_index > 3:
        next_index = 0

    return next_index


def main():
    input_lines = utils.get_input_lines(INPUT_FILE)

    instructions = input_lines[0].split(', ')

    # Starting situation
    pos = [0,0]
    direction_index = 0

    for index, step in enumerate(instructions):
        print("{index}: @{pos} facing {dir}. Next going {step}".format(index=index, pos=pos, dir=direction_names[direction_index], step=step))
        turn_direction = step[0]
        distance = int(step[1:])
        direction_index = next_direction_index(direction_index,turn_direction)

        pos[0] += direction_mods[direction_index][0]*distance
        pos[1] += direction_mods[direction_index][1]*distance

    print("Final Position: {}".format(pos))

    final_distance = abs(pos[0])+abs(pos[1])
    print("Final Distance: {}".format(final_distance))


if __name__ == '__main__':
    main()
