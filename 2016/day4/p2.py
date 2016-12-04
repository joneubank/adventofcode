"""
Advent of Code
Day : 4
Problem : 1

Note: once this runs, you need to find the room that is called
"northpole object storage" from the list

In the problem description there is no indication of what the room's name would be
so it wasn't sensible to program in to look for a specific string.
"""
from everyday import utils

import re
import operator


# Since this isn't absolute path, you need to run this file from within this directory
INPUT_FILE = 'input.txt'


def split_room_string(room_string):
    checksum_split = room_string.split('[')
    checksum = checksum_split[1].replace(']','')

    room_name = re.split('[0-9]+',checksum_split[0])[0]
    sector_id = int(re.split('.*-',checksum_split[0])[1])

    return room_name, sector_id, checksum


def is_real_room(room_name, checksum):
    counts = {}
    for letter in room_name:
        if letter != '-':
            if letter in counts:
                counts[letter] += 1
            else:
                counts[letter] = 1

    # ord(letter) gives letter position, and we are sorting in reverse order
    #  so we use negative value to get the alphabetic sorting to work
    counts_tuple = [(letter, counts[letter], -ord(letter)) for letter in counts.keys()]
    sorted_counts = sorted(counts_tuple, key=operator.itemgetter(1, 2), reverse=True)

    expected_checksum = ""
    for index, letter_tuple in enumerate(sorted_counts):
        if index == 5:
            break
        expected_checksum += letter_tuple[0]

    return expected_checksum == checksum


def decrypt_name(room_name, sector_id):
    shift_num = sector_id % 26
    decrypted_name = ''

    for letter in room_name:
        if letter == '-':
            shifted_letter = ' '
        else:
            shifted_order = ord(letter)+shift_num
            if shifted_order > 122:
                shifted_order -= 26
            shifted_letter = chr(shifted_order)

        decrypted_name += shifted_letter

    return decrypted_name


def main():
    input_lines = utils.get_input_lines(INPUT_FILE)

    for index, line in enumerate(input_lines):
        is_valid = False
        room_name, sector_id, checksum = split_room_string(line)
        if is_real_room(room_name, checksum):
            is_valid = True

            readable_name = decrypt_name(room_name, sector_id)

            print("{}: {}".format(sector_id, readable_name))


if __name__ == '__main__':
    main()
