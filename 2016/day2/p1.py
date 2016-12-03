"""
Advent of Code
Day : 2
Problem : 1
"""
from everyday import utils

# Since this isn't absolute path, you need to run this file from within this directory
INPUT_FILE = 'input.txt'

keypad=[[1,4,7],[2,5,8],[3,6,9]]
directions = {'U':[0,-1],'D':[0,1],'L':[-1,0],'R':[1,0]}



def main():
    input_lines = utils.get_input_lines(INPUT_FILE)

    bathroom_code = ""
    pos = [1,1]

    for index, line in enumerate(input_lines):
        print("{index} - Last Number: {last_num} - instructions: {line}".format(index=index, last_num=keypad[pos[0]][pos[1]], line=line))

        for letter in line:
            direction = directions.get(letter, [0,0])
            next_pos = [pos[0]+direction[0], pos[1]+direction[1]]
            if all([next_pos[0] >= 0, next_pos[0] <= 2, next_pos[1] >= 0, next_pos[1] <= 2]):
                pos = next_pos
            # print("    {} - {}".format(letter, keypad[pos[0]][pos[1]]))

        bathroom_code += "{}".format(keypad[pos[0]][pos[1]])

    print("Bathroom Code is: {}".format(bathroom_code))


if __name__ == '__main__':
    main()
