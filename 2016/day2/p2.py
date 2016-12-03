"""
Advent of Code
Day : 2
Problem : 2
"""
from everyday import utils

# Since this isn't absolute path, you need to run this file from within this directory
INPUT_FILE = 'input.txt'

keypad = [['' ,'' ,'1','' ,'' ],
          ['' ,'2','3','4','' ],
          ['5','6','7','8','9'],
          ['' ,'A','B','C','' ],
          ['' ,'' ,'D','' ,'' ]]

directions = {'U':[0,-1],'D':[0,1],'L':[-1,0],'R':[1,0]}


def main():
    input_lines = utils.get_input_lines(INPUT_FILE)

    bathroom_code = ""
    pos = [0,2]

    for index, line in enumerate(input_lines):
        print("{index} - Last Number: {last_num} - instructions: {line}".format(index=index, last_num=keypad[pos[1]][pos[0]], line=line))

        for letter in line:
            direction = directions.get(letter, [0,0])
            next_pos = [pos[0]+direction[0], pos[1]+direction[1]]
            if all( [
                next_pos[0] >= 0,
                next_pos[0] <= 4,
                next_pos[1] >= 0,
                next_pos[1] <= 4
                ]) and keypad[next_pos[1]][next_pos[0]]:
                pos = next_pos

        bathroom_code += "{}".format(keypad[pos[1]][pos[0]])

    print("Bathroom Code is: {}".format(bathroom_code))


if __name__ == '__main__':
    main()
