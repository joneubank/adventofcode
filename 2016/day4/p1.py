"""
Advent of Code
Day : 4
Problem : 1
"""
from everyday import utils

import re
import operator


# Since this isn't absolute path, you need to run this file from within this directory
INPUT_FILE = 'input.txt'


def split_room_string(room_string):
    checksum_split = room_string.split('[')
    checksum = checksum_split[1].replace(']','')

    room_name = re.split('[0-9]+',checksum_split[0])[0].replace('-','')
    sector_id = int(re.split('.*-',checksum_split[0])[1])

    print("{} - {} - {}".format(room_name, sector_id, checksum))

    return room_name, sector_id, checksum



def is_real_room(room_name, checksum):
    counts = {}
    for letter in room_name:
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


def main():
    input_lines = utils.get_input_lines(INPUT_FILE)

    valid_checksums = []

    for index, line in enumerate(input_lines):
        is_valid = False
        room_name, sector_id, checksum = split_room_string(line)
        if is_real_room(room_name, checksum):
            is_valid = True
            valid_checksums.append(sector_id)

        print("{}: {} - is valid: {}".format(index, line, is_valid))

    valid_sectors_sum = sum(valid_checksums)

    print("Sum of Real Room Sector IDs: {}".format(valid_sectors_sum))


if __name__ == '__main__':
    main()
