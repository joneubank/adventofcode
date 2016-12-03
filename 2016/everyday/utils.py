'''
Common utility functions used in advent of code puzzles
'''

def get_input_lines(filename):
    with open(filename) as f:
        lines = [line.rstrip('\n') for line in f]

    return lines
