"""
Advent of Code
Day : 4
Problem : 1
"""
from everyday import utils

# Since this isn't absolute path, you need to run this file from within this directory
INPUT_FILE = 'input.txt'


def split_room_string(room_string):
    room_name = 'nzydfxpc-rclop-qwzhpc-qtylyntyr'
    sector_id = '769'
    checksum  = 'oshgk'

    return room_name, sector_id, checksum



def is_real_room(room_name, checksum):
    return True


def main():
    input_lines = utils.get_input_lines(INPUT_FILE)

    valid_checksums = []

    for index, line in enumerate(input_lines):
        is_valid = False
        room_name, sector_id, checksum = split_room_string(line)
        if is_real_room(room_name, checksum):
            is_valid = True
            valid_checksums.append(sector_id)

        print("{}: {} - is valid: {}".format(index, line, valid))
        break

    valid_sectors_sum = sum(valid_checksums)

    print("Sum of Real Room Sector IDs: {}".format(valid_sectors_sum))



if __name__ == '__main__':
    main()
